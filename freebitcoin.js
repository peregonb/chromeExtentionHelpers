$(window).on('load', function(){
    if ($('#bonus_container_free_points').length && $('#bonus_container_free_lott').length){
        $('#free_play_form_button').trigger('click');
    }
    else{
        if (!$('#bonus_container_free_points').length){
            RedeemRPProduct('free_points_100');
        }

        if (!$('#bonus_container_free_lott').length && parseInt($('.user_reward_points').text()) >= 3600){
            RedeemRPProduct('free_lott_100');
        }
        
        setTimeout(() => $('#free_play_form_button').trigger('click'), 5000);
    }
});
