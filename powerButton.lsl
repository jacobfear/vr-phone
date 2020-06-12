/*
    *Developed by Tom Primswitch
    *All Rights Reserved 2015
    *build - v0.2
*/

//code ped: https://codepen.io/tomcruzana/full/XWrwVMy

string off = "e7ff98ac-8220-fc54-daa2-a1cded9fd5e8"; //off screen image
string homepage = "http://10.0.0.4/ar%20phone/"; //your dns host here
float sleepTimer = 3.0;

SetMediaOn() 
{
    //This function will turn on the media on the root prim
    llSetLinkMedia(LINK_ROOT, 1,
        [PRIM_MEDIA_AUTO_ZOOM, TRUE,
         PRIM_MEDIA_AUTO_SCALE, TRUE,
        //PRIM_MEDIA_CONTROLS_MINI, 1,
         PRIM_MEDIA_WIDTH_PIXELS, 600,
         PRIM_MEDIA_HEIGHT_PIXELS, 800,
         PRIM_MEDIA_AUTO_PLAY, TRUE,
         PRIM_MEDIA_PERMS_INTERACT, 1, //interaction security
         PRIM_MEDIA_PERMS_CONTROL, 0, //0 none, 1 owner, 2 group, 4 all 
         PRIM_MEDIA_CURRENT_URL, homepage,    
         PRIM_MEDIA_HOME_URL, homepage 
        ]);                                          
}

SetMediaOff()
{
    llOwnerSay("\nDevice is preparing to sleep...");
    llClearLinkMedia(LINK_ROOT, 1);
    llSetLinkTexture(LINK_ROOT, off, 1);
    llOwnerSay("Process completed");
}

default
{
    state_entry()
    {
        SetMediaOn();
    }

    touch_start(integer num_detected)
    {
        if (llDetectedKey(0) == llGetOwner()) //check using the UUID if the avatar touching the object is the owner
        {
            llResetTime(); //resets the script-time timer to zero
        }
    }
    
    touch(integer num_detected)
    {
        if (llDetectedKey(0) == llGetOwner()) 
        {
            if (llDetectedKey(0) == llGetOwner() && llGetTime() > sleepTimer)
            { 
                //If the owner has touched this object longer than 3 seconds, execute the sleep function 
                SetMediaOff();
            }
        }   
    }

    touch_end(integer num_detected)
    {
        if (llDetectedKey(0) == llGetOwner()) 
        {
            if (llGetTime() <= 1.0)
            {
                // The user did a normal quick click on the object
                // execute actions for normal clicks
                    llOwnerSay("Initializing...");
                    SetMediaOn();
                    
            }
        }
    }
    
}
