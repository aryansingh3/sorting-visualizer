
function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color 

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color 
            div_update(divs[i+1],div_sizes[i+1],"red");//Color 

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height 
            div_update(divs[i+1],div_sizes[i+1],"red");//Height
    
            div_update(divs[i],div_sizes[i],"blue");//Color
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color 
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color 
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color 
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color 

    enable_buttons();
}

