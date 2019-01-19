(function ($) {
    "use strict";
    $.fn.imageGallery = function (options) {
        var main_IGdiv = $('#main_IGdiv');
        var imgG_List = $('.imgG-list');
        var settings = $.extend({}, options);
        var imgG = $('<div class="imgG-show" style="background-color: ' + settings.boxBackgoundColor + '"></div>');
        var imgGimg = $('<img src="" class="imgG-current-img">');
        var imgGclose = $('<div id="imgG-close" style="color:' + settings.closeButtonColor + '" >&#10005;</div>');
        var imgData = $('<div class="imgData"></div>');
        var btnBox = $('<div id="btnBox"><div id="btnPrev" class="navButtons"><i class="' + settings.previousButtonIcon + '" style="color:' + settings.navBtnColor + '"></i></div>' +
            '<div id="btnNext" class="navButtons"><i class="' + settings.nextButtonIcon + '" style="color:' + settings.navBtnColor + '"></i></div></div>');

        imgG.append(imgGimg).append(imgGclose).append(imgData).append(btnBox);
        imgG.css('margin-bottom', 'calc(' + settings.gapSize + '% / 10)');
        imgG_List.each(function () {
            $(this).append('<div class="imgStyle"></div>');
        });

        var imgStyle = $('.imgStyle');
        var bbSize;
        $(window).resize(function () {
            var imgW = imgStyle.width();
            imgStyle.css({ 'height': imgW });
        });

        imgStyle.append('<div class="over"></div><div class="thTitle"></div>');
        var overDiv = $('.over');
        overDiv.css({ 'background-color': settings.overlayColor, 'opacity': settings.overlayOpacity });

        return this.each(function () {
            imgG_List.each(function () {
                var imgData = $(this).attr('data-img');
                $(this).children().css('background-image', 'url(' + imgData + ')');
                if ($(this).attr('data-link') == '') $(this).attr('data-link', '#!');

                var headerData = $(this).attr('data-h');
                $(this).find('.thTitle').html(headerData);
            });

            imgG_List.on('click', function () {
                imgG.remove();
                imgG_List.removeClass('active_th');
                overDiv.css({ 'display': 'block' });
                $(this).addClass('active_th').find(overDiv).css({ 'display': 'none' });

                var dataHeader = $(this).attr('data-h');
                var link = $(this).attr('data-link');
                var dataTxt = $(this).attr('data-txt');
                var imgData = $(this).attr('data-img');
                imgGimg.attr('src', imgData);

                var items = $(imgG_List);
                var itemAmt = items.length;
                var activeItem = $(this).index();

                function cycleItems() {
                    var item = $(imgG_List).eq(activeItem);
                    var dataHeader = item.attr('data-h');
                    var link = item.attr('data-link');
                    var dataTxt = item.attr('data-txt');
                    var imgData = item.data('img');
                    imgGimg.attr('src', imgData);
                    item.addClass('active_th').find(overDiv).css({ 'display': 'none' });

                    if ($(item).next().hasClass('imgG-show')) {
                        imgG.toggle();
                    } else {
                        imgG.insertAfter(item).css('display', 'block');
                    }
                    $('html, body').animate({ scrollTop: imgG.position().top + imgCP }, 'medium');

                    imgG.find('.imgData').html('<p class="dataText" style="color:' + settings.descriptionColor + '; font-family: ' + settings.descriptionFontFamily + '; font-size: ' + settings.descriptionTextSize + '">' + dataTxt + '</p>')
                        .prepend('<div class="boxTitle" style="color:' + settings.boxTitleColor + '; font-family: ' + settings.boxTitleFontFamily + ';">' + dataHeader + '</div>')
                        .append('<div><a id="linkButton" style=' +
                            '"background-color:' + settings.linkButtonBackground + '; ' +
                            'color: ' + settings.linkButtonTextColor + '; ' +
                            'border-radius: ' + settings.linkButtonBorderRadius + '; ' +
                            'font-family: ' + settings.linkButtonFontFamily + '; ' +
                            'border: solid ' + settings.linkButtonBorderSize + ' ' + settings.linkButtonBorderColor + '"' +
                            ' href="' + link + '">' + settings.linkButtonText + '</a></div>');

                    var linkButton = $('#linkButton');
                    if (settings.underlineLinkButtonText == 'true') {
                        imgG.find(linkButton).css('text-decoration', 'underline');
                    } else {
                        linkButton.css('text-decoration', 'none');
                    }

                    linkButton.mouseenter(function () {
                        $(this).css({
                            'background-color': settings.linkButtonBackgroundOnHover,
                            'color': settings.linkButtonTextColorOnHover,
                            'border-color': settings.linkButtonBorderColorOnHover
                        });
                    });
                    linkButton.mouseleave(function () {
                        $(this).css({
                            'background-color': settings.linkButtonBackground,
                            'color': settings.linkButtonTextColor,
                            'border-color': settings.linkButtonBorderColor
                        });
                    });

                    var shBtn = item.attr('data-btn');
                    if (shBtn == 'false') {
                        linkButton.css('display', 'none');
                    }
                }

                imgG.find('#btnNext').on('click', function () {
                    imgG_List.removeClass('active_th');
                    overDiv.css({ 'display': 'block' });
                    activeItem += 1;
                    if (activeItem > itemAmt - 1) {
                        activeItem = 0;
                    }
                    cycleItems();
                    $(this).children().css('color', settings.navBtnColor);
                });

                imgG.find('#btnPrev').on('click', function () {
                    imgG_List.removeClass('active_th');
                    overDiv.css({ 'display': 'block' });
                    activeItem -= 1;
                    if (activeItem < 0) {
                        activeItem = itemAmt - 1;
                    }
                    cycleItems();
                    $(this).children().css('color', settings.navBtnColor);
                });

                imgG.find('.imgData').html('<p class="dataText" style="color:' + settings.descriptionColor + '; font-family: ' + settings.descriptionFontFamily + '; font-size: ' + settings.descriptionTextSize + '">' + dataTxt + '</p>')
                    .prepend('<div class="boxTitle" style="color:' + settings.boxTitleColor + '; font-family: ' + settings.boxTitleFontFamily + ';">' + dataHeader + '</div>')
                    .append('<div><a id="linkButton" style=' +
                        '"background-color:' + settings.linkButtonBackground + '; ' +
                        'color: ' + settings.linkButtonTextColor + '; ' +
                        'border-radius: ' + settings.linkButtonBorderRadius + '; ' +
                        'font-family: ' + settings.linkButtonFontFamily + '; ' +
                        'border: solid ' + settings.linkButtonBorderSize + ' ' + settings.linkButtonBorderColor + '"' +
                        ' href="' + link + '">' + settings.linkButtonText + '</a></div>');

                if (settings.openLinkInNewTab == 'true') {
                    imgG.find('#linkButton').attr('target', '_blank');
                }

                $(function () {
                    $(linkButton).mouseenter(function () {
                        $(this).css({
                            'background-color': settings.linkButtonBackgroundOnHover,
                            'color': settings.linkButtonTextColorOnHover,
                            'border-color': settings.linkButtonBorderColorOnHover
                        });
                    });

                    $(linkButton).mouseleave(function () {
                        $(this).css({
                            'background-color': settings.linkButtonBackground,
                            'color': settings.linkButtonTextColor,
                            'border-color': settings.linkButtonBorderColor
                        });
                    });

                    if (settings.underlineLinkButtonText == 'true') {
                        $(linkButton).css('text-decoration', 'underline');
                    } else {
                        $(linkButton).css('text-decoration', 'none');
                    }
                });

                if ($(this).attr('data-btn') == 'false') {
                    imgG.find('#linkButton').remove();
                }

                if ($(this).next().hasClass('imgG-show')) {
                    imgG.toggle();
                } else {
                    imgG.insertAfter(this).slideDown();

                    if (settings.param_gap != '0') {
                        imgG.css('width', 'calc(100% - 0.' + settings.param_gap + '%)');
                    }
                    if (settings.param_gap == '10') {
                        imgG.css('width', '99%');
                    }
                }

                var wpp = $('#main_IGdiv').position();
                var imgCP = wpp.top - (imgW / 4);
                setTimeout(function() {
                    $('html, body').animate({ scrollTop: imgG.position().top + imgCP }, 'medium');
                }, 50);

                imgG.find('#btnPrev').mouseenter(function () {
                    $(this).children().css('color', settings.navBtnColorOnHover);
                });
                imgG.find('#btnPrev').mouseleave(function () {
                    $(this).children().css('color', settings.navBtnColor);
                });

                imgG.find('#btnNext').mouseenter(function () {
                    $(this).children().css('color', settings.navBtnColorOnHover);
                });
                imgG.find('#btnNext').mouseleave(function () {
                    $(this).children().css('color', settings.navBtnColor);
                });
            });

            $('#imgG').on('click', '#imgG-close', function () {
                imgGimg.animate({ opacity: 0 }, 200, function () {
                    imgG.slideUp();
                });

                overDiv.css({ 'display': 'none' });
                var atX = $('.active_th');
                var atXw;

                if (settings.columnsQuantity == '2') {
                    atXw = $(atX).width() / 8;
                }
                if (settings.columnsQuantity == '3') {
                    atXw = $(atX).width() / 4;
                }
                if (settings.columnsQuantity == '4') {
                    atXw = $(atX).width() / 2;
                }
                if (settings.columnsQuantity == '5' || settings.columnsQuantity == 'max') {
                    atXw = $(atX).width();
                }

                $("html, body").animate({ scrollTop: atX.offset().top - atXw }, 'medium');
                imgG_List.removeClass('active_th');
            });

            imgG_List.css({ 'margin-right': 'calc(' + settings.gapSize + '% / 10)', 'margin-bottom': 'calc(' + settings.gapSize + '% / 10)' });

            var imageTitle = $('.thTitle');
            imageTitle.css({
                'font-size': settings.titleTextSize,
                'color': settings.titleColor,
                'font-family': settings.titleFontFamily
            });

            if (settings.showTitle == 'true') {
                imageTitle.css({ 'visibility': 'visible' });
            }

            if (settings.titlePosition == 'topLeft') {
                imageTitle.css({ 'top': 0, 'text-align': 'left' });
            }
            if (settings.titlePosition == 'topCenter') {
                imageTitle.css({ 'top': 0, 'text-align': 'center' });
            }
            if (settings.titlePosition == 'topRight') {
                imageTitle.css({ 'top': 0, 'text-align': 'right' });
            }
            if (settings.titlePosition == 'center') {
                imageTitle.css({ 'top': '44%', 'text-align': 'center' });
            }
            if (settings.titlePosition == 'bottomLeft') {
                imageTitle.css({ 'bottom': 0, 'text-align': 'left' });
            }
            if (settings.titlePosition == 'bottomCenter') {
                imageTitle.css({ 'bottom': 0, 'text-align': 'center' });
            }
            if (settings.titlePosition == 'bottomRight') {
                imageTitle.css({ 'bottom': 0, 'text-align': 'right' });
            }

            $(function () {
                main_IGdiv.css({ 'width': settings.imgGalleryWidth, 'display': 'inline-block' });
                imgW = imgStyle.width();
                imgStyle.css({ 'height': imgW });
            });

            imgStyle.on('mouseenter', function () {
                $(this).css({ 'opacity': settings.thumbnailsOpacityOnHover });
            }).on('mouseleave', function () {
                $(this).css({ 'opacity': 1 });
            });

            var linkBtn = $('#linkButton');
            var boxTitle = $('.boxTitle');
            $(this).on('click', function () {
                var boxTitle = $('.boxTitle');
                var wx = $(window).width();
                imgGimg.css('min-width', '50%');
                boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                imgGclose.css({ 'font-size': '30px', 'top': '0px', 'right': '14px' });
                btnBox.css({'font-size':'34px'});
                $(linkButton).css({'line-height': '34px', 'font-size': '16px'});

                if (settings.gapSize == '10') {
                    imgG.css('width', '99%');
                } else {
                    imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                }
                if (winW > 755) {
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    $(linkButton).css({ 'line-height': '34px', 'font-size': '16px'});
                    btnBox.css({'font-size':'34px'});
                }
                if (wx < 750) {
                    imgGimg.css('min-width', '90%');
                    imgGclose.css({ 'font-size': '30px', 'top': '3px', 'right': '14px' });
                    $(linkButton).css({ 'line-height': '30px', 'font-size': '14px' });
                    btnBox.css({'font-size':'30px'});
                }
                if (wx < 600) {
                    imgGclose.css({ 'font-size': '26px', 'top': '3px', 'right': '12px' });
                }
                if (wx < 500) {
                    imgGclose.css({ 'font-size': '22px', 'top': '5px', 'right': '8px' });
                }
            });

            if (settings.columnsQuantity == 'max') {
                imgG_List.css('width', 'calc(14.285% - (' + settings.gapSize + '% / 10))');

                $(window).resize(function () {
                    var winX = $(this).width();
                    if (winX > 965) {
                        imgGimg.css('min-width', '50%');
                        imgGclose.css({ 'font-size': 'calc(1.6vw + 1.6vh + 1.6vmin)' });
                        boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                        linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        btnBox.css({'font-size':'34px'});

                        if (settings.gapSize == '10') {
                            imgG.css('width', '99%');
                        } else {
                            imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                        }
                    }
                    if (winX < 800) {
                        $(imgG_List).css('width', 'calc(16.66666667% - (' + settings.gapSize + '% / 10))');
                    }
                    if (winW > 755) {
                        imgGimg.css('min-width', '50%');
                        linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        btnBox.css({'font-size':'34px'});
                    }
                    if (winX < 750) {
                        imgG_List.css('width', 'calc(20% - (' + settings.gapSize + '% / 10))');
                        linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 650) {
                        imgG_List.css('width', 'calc(25% - (' + settings.gapSize + '% / 10))');
                        linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 550) {
                        imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                        imgGclose.css({ 'font-size': '22px', 'top': '5px', 'right': '8px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 510) {
                        imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '90%');
                        imgGclose.css({ 'font-size': '22px', 'top': '5px', 'right': '8px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 480) {
                        imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                    }
                    if (winX < 400) {
                        imgG_List.css('width', '100%');
                        imgG.css('width', '100%');
                    }
                });

                var winW = $(this).width();
                if (winW < 960) {
                    imgG_List.css('width', 'calc(14.285% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                    boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                    linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    btnBox.css({'font-size':'34px'});

                    var imgW = imgStyle.width();
                    imgStyle.css({ 'height': imgW });

                    if (settings.gapSize == '10') {
                        imgG.css('width', '99%');
                    } else {
                        imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                    }
                }
                if (winW < 800) {
                    imgG_List.css('width', 'calc(16.66666667% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                }
                if (winW > 755) {
                    imgGimg.css('min-width', '50%');
                    linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    btnBox.css({'font-size':'34px'});
                }
                if (winW < 750) {
                    imgG_List.css('width', 'calc(20% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                    linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                    btnBox.css({'font-size':'30px'});
                }
                if (winW < 650) {
                    imgG_List.css('width', 'calc(25% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                }
                if (winW < 550) {
                    imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                    imgGclose.css({ 'font-size': '22px', 'top': '5px', 'right': '8px' });
                    btnBox.css({'font-size':'30px'});
                }
                if (winW < 480) {
                    imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '90%');
                    imgGclose.css({ 'font-size': '22px', 'top': '5px', 'right': '8px' });
                    btnBox.css({'font-size':'30px'});
                }
                if (winW < 400) {
                    imgG_List.css('width', '100%');
                    imgGimg.css('min-width', '90%');
                    imgG.css('width', '100%');
                }
            }

            if (settings.columnsQuantity == '5') {
                imgG_List.css('width', 'calc(20% - (' + settings.gapSize + '% / 10))');

                $(window).resize(function () {
                    var winX = $(this).width();
                    if (winX < 960) {
                        imgG_List.css('width', 'calc(20% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '50%');
                        boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                        linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        btnBox.css({'font-size':'34px'});

                        if (settings.gapSize == '10') {
                            imgG.css('width', '99%');
                        } else {
                            imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                        }
                    }
                    if (winW > 755) {
                        imgGimg.css('min-width', '50%');
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        linkBtn.css({ 'line-height': '34px', 'font-size': '16px'});
                        btnBox.css({'font-size':'34px'});
                    }
                    $(imgG_List).css('width', 'calc(20% - (' + settings.gapSize + '% / 10))');
                    if (winX < 750) {
                        imgG_List.css('width', 'calc(25% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '90%');
                        linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 600) {
                        imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                        imgGclose.css({ 'font-size': '28px', 'top': '3px', 'right': '12px' });
                        linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 500) {
                        imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '90%');
                        imgGclose.css({ 'font-size': '22px', 'top': '5px', 'right': '8px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 420) {
                        imgG_List.css('width', '100%');
                        imgG.css('width', '100%');
                    }
                });

                var winW = $(this).width();
                if (winW < 960) {
                    imgG_List.css('width', 'calc(20% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                    imgGclose.css({ 'font-size': '30px', 'top': '0px', 'right': '14px' });
                    boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                
                   /*  var imgW = imgStyle.width();
                    imgStyle.css({ 'height': imgW }); */

                    if (settings.gapSize == '10') {
                        imgG.css('width', '99%');
                    } else {
                        imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                    }
                }
                if (winW > 755) {
                    imgGimg.css('min-width', '50%');
                    imgGclose.css({ 'font-size': '30px', 'top': '0px', 'right': '14px' });
                    linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                }
                if (winW < 750) {
                    imgG_List.css('width', 'calc(25% - (' + settings.gapSize + '% / 10))');
                    btnBox.css({'font-size': '30px'});
                    linkBtn.css({ 'line-height': '30px', 'font-size': '14px'});
                }
                if (winW < 600) {
                    imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                    imgGclose.css({ 'font-size': '30px', 'top': '3px', 'right': '12px' });
                    linkBtn.css({ 'line-height': '30px', 'font-size': '14px'});
                    btnBox.css({'font-size': '30px'});
                }
                if (winW < 500) {
                    imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '90%');
                    imgGclose.css({ 'font-size': '22px', 'top': '5px', 'right': '8px' });
                }
                if (winW < 420) {
                    imgG_List.css('width', '100%');
                    imgG.css('width', '100%');
                }
            }

            if (settings.columnsQuantity == '4') {
                imgG_List.css('width', 'calc(25% - (' + settings.gapSize + '% / 10))');

                $(window).resize(function () {
                    var winX = $(this).width();
                    if (winX < 960) {
                        imgG_List.css('width', 'calc(25% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '50%');
                        boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                        linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        btnBox.css({'font-size':'34px'});

                        if (settings.gapSize == '10') {
                            imgG.css('width', '99%');
                        } else {
                            imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                        }
                    }
                    if (winX < 780) {
                        imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                    }
                    if (winW > 755) {
                        imgGimg.css('min-width', '50%');
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        linkBtn.css({ 'line-height': '34px', 'font-size': '16px'});
                        btnBox.css({'font-size':'34px'});
                    }
                    if (winX < 650) {
                        imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '90%');
                        imgGclose.css({ 'font-size': '26px', 'top': '3px', 'right': '12px' });
                        linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 500) {
                        imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '90%');
                        imgGclose.css({ 'font-size': '24px', 'top': '5px', 'right': '8px' });
                    }
                    if (winX < 420) {
                        imgG_List.css('width', '100%');
                        imgG.css('width', '100%');
                    }
                });

                var winW = $(this).width();
                if (winW < 960) {
                    imgG_List.css('width', 'calc(25% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                    boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                    linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    btnBox.css({'font-size':'34px'});

                    var imgW = imgStyle.width();
                    imgStyle.css({ 'height': imgW });

                    if (settings.gapSize == '10') {
                        imgG.css('width', '99%');
                    } else {
                        imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                    }
                }
                if (winW < 780) {
                    imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                }
                if (winW > 755) {
                    imgGimg.css('min-width', '50%');
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    linkBtn.css({ 'line-height': '34px', 'font-size': '16px'});
                    btnBox.css({'font-size':'34px'});
                }
                if (winW < 650) {
                    imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '90%');
                    imgGclose.css({ 'font-size': '26px', 'top': '3px', 'right': '12px' });
                    linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                    btnBox.css({'font-size':'30px'});
                }
                if (winW < 500) {
                    imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '90%');
                    imgGclose.css({ 'font-size': '24px', 'top': '5px', 'right': '8px' });
                }
                if (winW < 420) {
                    imgG_List.css('width', '100%');
                    imgG.css('width', '100%');
                }
            }

            if (settings.columnsQuantity == '3') {
                imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');

                $(window).resize(function () {
                    var winX = $(this).width();
                    if (winX < 960) {
                        imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '50%');
                        boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                        linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        btnBox.css({'font-size':'34px'});

                        if (settings.gapSize == '10') {
                            imgG.css('width', '99%');
                        } else {
                            imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                        }
                    }
                    if (winW > 770) {
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        linkBtn.css({ 'line-height': '34px', 'font-size': '16px' });
                        btnBox.css({'font-size':'34px'});
                    }
                    if (winX < 765) {
                        imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '90%');
                        linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        btnBox.css({'font-size':'34px'});
                    }
                    if (winX < 510) {
                        imgGclose.css({ 'font-size': '24px', 'top': '5px', 'right': '8px' });
                        linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                        btnBox.css({'font-size':'30px'});
                    }
                    if (winX < 420) {
                        imgG_List.css('width', '100%');
                        imgG.css('width', '100%');
                        imgGclose.css({ 'font-size': '24px', 'top': '5px', 'right': '8px' });
                    }
                });

                var winW = $(this).width();
                if (winW < 960) {
                    imgG_List.css('width', 'calc(33.33% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                    boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                    linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    btnBox.css({'font-size':'34px'});

                    var imgW = imgStyle.width();
                    imgStyle.css({ 'height': imgW });

                    if (settings.gapSize == '10') {
                        imgG.css('width', '99%');
                    } else {
                        imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                    }
                }
                if (winW > 770) {
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    linkBtn.css({ 'line-height': '34px', 'font-size': '16px' });
                    btnBox.css({'font-size':'34px'});
                }
                if (winW < 765) {
                    imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '90%');
                    imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                    imgGclose.css({ 'font-size': '26px', 'top': '3px', 'right': '12px' });
                    linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                    btnBox.css({'font-size':'30px'});
                }
                if (winW < 510) {
                    imgGclose.css({ 'font-size': '24px', 'top': '5px', 'right': '10px' });
                    linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                    btnBox.css({'font-size':'30px'});
                }
                if (winW < 420) {
                    imgG_List.css('width', '100%');
                    imgG.css('width', '100%');
                    imgGclose.css({ 'font-size': '24px', 'top': '5px', 'right': '10px' });
                }
            }

            if (settings.columnsQuantity == '2') {
                imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');

                $(window).resize(function () {
                    var winX = $(this).width();
                    if (winX < 960) {
                        imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                        imgGimg.css('min-width', '50%');
                        boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                        linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        btnBox.css({'font-size':'34px'});

                        if (settings.gapSize == '10') {
                            imgG.css('width', '99%');
                        } else {
                            imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                        }
                    }
                    if (winX < 765) {
                        imgGimg.css('min-width', '90%');
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        linkBtn.css({ 'line-height': '34px', 'font-size': '16px' });
                        btnBox.css({'font-size':'34px'});
                    }
                    if (winX < 600) {
                        imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                        linkBtn.css({ 'line-height': '34px', 'font-size': '16px' });
                        btnBox.css({'font-size':'34px'});
                    }
                    if (winX < 550) {
                        imgG_List.css('width', '100%');
                        imgG.css('width', '100%');
                        imgGclose.css({ 'font-size': '24px', 'top': '3px', 'right': '10px' });
                        linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                        btnBox.css({'font-size':'30px'});
                    }
                });

                var winW = $(this).width();
                if (winW < 960) {
                    imgG_List.css('width', 'calc(50% - (' + settings.gapSize + '% / 10))');
                    imgGimg.css('min-width', '50%');
                    boxTitle.css('font-size', 'calc(1.6vw + 1.6vh + 1.6vmin)');
                    linkBtn.css({'line-height': '34px', 'font-size': '16px'});
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    btnBox.css({'font-size':'34px'});

                    var imgW = imgStyle.width();
                    imgStyle.css({ 'height': imgW });

                    if (settings.gapSize == '10') {
                        imgG.css('width', '99%');
                    } else {
                        imgG.css('width', 'calc(100% - 0.' + settings.gapSize + '%)');
                    }
                }
                if (winW > 770) {
                    imgGimg.css('min-width', '50%');
                }
                if (winW < 765) {
                    imgGimg.css('min-width', '90%');
                    imgGclose.css({ 'font-size': '30px', 'top': '1px', 'right': '14px' });
                    linkBtn.css({ 'line-height': '34px', 'font-size': '16px' });
                    btnBox.css({'font-size':'34px'});
                }
                if (winW < 550) {
                    imgG_List.css('width', '100%');
                    imgG.css('width', '100%');
                    imgGclose.css({ 'font-size': '24px', 'top': '3px', 'right': '10px' });
                    linkBtn.css({ 'line-height': '30px', 'font-size': '14px' });
                    btnBox.css({'font-size':'30px'});
                }
            }
        });
    };
}(jQuery));