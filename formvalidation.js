function formvalidation()
{
    alert("sub");
	var tname=document.form.team;
	var lname=document.form.lname;
	var fname=document.form.fname;
    var zip=document.form.zip;
    var mno=document.form.mno;
    var r1=document.form.r1;
    var r2=document.form.r2;
    var c1=document.form.c1;
    var c2=document.form.c2;
    if(tnameval(tname,6)==true)
    {
    	if(fnameval(fname,0)==true)
    	{
    		if(lnameval(lname,0)==true)
    		{
    			if(zipval(zip,6)==true)
    			{
                    if(mnoval(mno,10)==true)
                    {
    				    if(r1r2val()==true)
    				    {
    					   if(c1c2val()==true)
    					    {
                                alert("submitted");
    						    return true;
                            }     
    					}
    				}
    			}
    		}
    	}
    }
    else
    {
    	return false;
    }
}
function tnameval(tname,mn)
{
	var tlen=tname.value.length;
	if(tlen<mn)
	{
		alert("Team name should atleast have "+mn+" characters");
        tname.focus();
        return false;
	}
    return true;
}
function fnameval(fname,mn)
{
    var flen=fname.value.length;
        if(flen==mn)
        {
            alert("First name should not be empty");
            fname.focus();
            return false;
        }
        return true;
}
function lnameval(lname,mn)
{
    var llen=lname.value.length; 
    if(llen==mn)
    {
        alert("Last name should not be empty");
        lname.focus();
        return false;
    }
    return true;
}
function zipval(zip,mn)
{
    var zlen=zip.value.length;
    if(number(zip.valueOf()))
    {
    if(zlen=6)
    {
        alert("Zip code Should contain exactly 6 digits");
        zip.focus();
        return false;
    }}
    else
    {
        alert("noojd")
    }

    return true;
}