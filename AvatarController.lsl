/*
    *Developed by Tom Cruzana
    *All Rights Reserved 2015
    *build - v0.2
    *Created - 12/18/2015
*/

integer gListener;     //identity of the listener associated with the dialog, so we can clean up when not needed
integer channel;
string animHolder = "00";  //blank default avatar animation

list order_buttons(list buttons)
{
    return llList2List(buttons, -3, -1) + llList2List(buttons, -6, -4)
         + llList2List(buttons, -9, -7) + llList2List(buttons, -12, -10);
}

default
{
    state_entry()
    {
        //ask user permission to animate its avatar 
        llRequestPermissions(llGetOwner(), PERMISSION_TRIGGER_ANIMATION);

        //for input dialog box
        channel = (integer)(llFrand(-1000000000.0) - 1000000000.0);
        llListen(channel,"", "","");
    }

    run_time_permissions(integer parm)
    {
        if(parm == PERMISSION_TRIGGER_ANIMATION)
        {
            llStartAnimation(animHolder); //set animHolder as the default start animation of the avatar
        }
    }

    on_rez(integer st)
    {
        llResetScript(); //lil' housekeeping when rezzing the object 
    }

    attach(key id)
    {
        llStopAnimation(animHolder); //set animHolder as the default stop animation of the avatar
    }

    //dialogue menu section--------------------------------------------->>>

    touch_start(integer total_number)
    {
        if (llDetectedKey(0) == llGetOwner()) 
        {
            llListenRemove(gListener); //kill off any outstanding listener, to avoid any chance of multiple listeners being active
            key user = llDetectedKey(0); //get user UUID
            //listen to any reply from that user only, and only on the same channel to be used by llDialog

            //send a dialog sa reseident/user
            llDialog(llDetectedKey(0),"\nPlease choose an option:\n", order_buttons(["[F]Selfie 01", "[F]Selfie 02", "[F]Talking", "[M]Selfie 01", "[Uni]Selfie 01", "[Uni]Selfie 02", "[Uni]Talking", "Stop", "Reset"]),channel);
            
            //if no interaction from the user, the dialog box will expire after 60 secs
            llSetTimerEvent(60.0);
        }
    }

    listen(integer chan, string name, key id, string msg)
    {
        //NOTE: LSL doen't have switch case functionality and efficient error handling
        if (msg == "[F]Selfie 01")
        {
            llStopAnimation(animHolder); //set default anim which is 00
            animHolder = "F_selfie01"; //assign a new anim
            llStartAnimation("F_selfie01"); //start the new anim
        }
        else if (msg == "[F]Selfie 02")
        {
            llStopAnimation(animHolder);
            animHolder = "F_selfie02";
            llStartAnimation("F_selfie02");
        }
        else if (msg == "[F]Talking")
        {
            llStopAnimation(animHolder);
            animHolder = "F_talking01";
            llStartAnimation("F_talking01");
        }
        else if (msg == "[M]Selfie 01")
        {
            llStopAnimation(animHolder);
            animHolder = "M_selfie01";
            llStartAnimation("M_selfie01");
        }
        else if (msg == "[Uni]Selfie 01")
        {
            llStopAnimation(animHolder);
            animHolder = "Uni_selfie01";
            llStartAnimation("Uni_selfie01");
        }
        else if (msg == "[Uni]Selfie 02")
        {
            llStopAnimation(animHolder);
            animHolder = "Uni_selfie02";
            llStartAnimation("Uni_selfie02");
        }
        else if (msg == "[Uni]Talking")
        {
            llStopAnimation(animHolder);
            animHolder = "Uni_talking01";
            llStartAnimation("Uni_talking01");
        }
        else if (msg == "Stop")
        {
            llStopAnimation(animHolder);
            animHolder = "00";
            llStartAnimation("00");
        }
        else if (msg == "Reset")
        {
            llOwnerSay("You've reset the scripts of this device.");
            llResetScript();//reset script permission
        }

        // Timer fire immediately, to do clean-up actions
        llSetTimerEvent(0.1);
    }

    timer()
    {
        // Stop listening. It's wise to do this to reduce lag
        llListenRemove(gListener);
        // Stop the timer now that its job is done
        llSetTimerEvent(0.0);// you can use 0 as well to save memory
    }
}
