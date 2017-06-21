/**
 * Created by Administrator on 2016/12/15.
 */


$(function () {
    var bannerSlider = new Slider($('#banner_tabs'), {
        time: 5000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade',
        controller: $('#bannerCtrl'),
        activeControllerCls: 'active'
    });
    $('#banner_tabs .flex-prev').click(function () {
        bannerSlider.prev()
    });
    $('#banner_tabs .flex-next').click(function () {
        bannerSlider.next()
    });


    var zc = {};


    zc.dom = {}
    /*dom对象*/
    zc.fn = {};
    /*方法*/


    /*sw-1 下切换*/
    zc.fn.sw_one_tab = function () {

        zc.dom.sw_one_li = $('.sw-1.view3  .view3-list li');
        zc.dom.sw_one_tab = $('.sw-1.view3  .v3-tab-view');

        zc.dom.sw_one_li.on('click', function () {
            zc.dom.sw_one_li.removeClass('active');
            zc.dom.sw_one_tab.removeClass('active');
            var li_idx = $(this).index();
            $(this).addClass('active')

            zc.dom.sw_one_tab.eq(li_idx).addClass('active')
        })
    };


    zc.fn.sw_one_tab();
    /**/

})