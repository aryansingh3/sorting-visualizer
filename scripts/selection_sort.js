
function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color 

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color 

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Color
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color 
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color 
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height 
            div_update(divs[i],div_sizes[i],"red");//Height 
            div_update(divs[index_min],div_sizes[index_min],"blue");//Color 
        }
        div_update(divs[i],div_sizes[i],"green");//Color 
    }
    div_update(divs[i],div_sizes[i],"green");//Color 

    enable_buttons();
}

