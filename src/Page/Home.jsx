import { useEffect, useState } from "react"
import { getAllCategory, getSingleCategory } from "../service/Category";
import { Grid, Tab, Tabs } from "@mui/material";
import BasicCard from "../components/CategoryCard";



export default function Home() {
    const [type, setType] = useState(0);
    const [data, setData] = useState([]);
    const [singleCategory, setSingleCategory] = useState([]);
    async function allCategory(){
        const res = await getAllCategory();
        if(res.isSuccess){
            setData(res.data);
        }
    }
    async function singleType(){
        let params;
        if(type===0) params = 'electronics';
        if(type===1) params = 'jewelery';
        if(type===2) params = "men's clothing";
        if(type===3) params =  "women's clothing";
        const res = await getSingleCategory(params);
        if(res.isSuccess){
            setSingleCategory(res.data);
        }
    }

    
    useEffect(()=>{
        allCategory();
        singleType()
    },[type])
  return (
    <>
    <Tabs
          value={type}
          
          onChange={(event, newValue) => {
            setType(newValue);
            
          }}
          style={{zIndex:'1', paddingBottom: 5, margin:'10px',marginLeft:'36px', position:'fixed', top:'90px', left:'2%', width:'100%'}}
          aria-label="disabled tabs example"
        >
            {data && data.map((e, i)=>{
                return (
                    <Tab key={i} style={{ width: "23%", color:'white',  }} label={e} />
                )
            })}
        </Tabs>
        <Grid container spacing={2}> {singleCategory && singleCategory.map((e)=>{
            console.log(singleCategory)
            return(
                <BasicCard key={e.id}
                title={e.title}
                rating={e.rating.rate}
                count={e.rating.count}
                    category={e.category}
                    desc={e.description}
                    img={e.image}
                    price={e.price}
                    id={e.id}

                
                />
            )
        })}
        </Grid>
        </>
  );
}


