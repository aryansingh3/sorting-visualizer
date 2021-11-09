

function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"black");//color updating

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "yellow");//Color updati
                div_update(divs[j+1],div_sizes[j+1], "red");//Color updath

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height updatinbg
                div_update(divs[j+1],div_sizes[j+1], "red");//Height updating
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updating
        }
        div_update(divs[j],div_sizes[j], "green");//Color updati
    }
    div_update(divs[0],div_sizes[0], "green");//Color updatng

    enable_buttons();
}

