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
        <Grid container spacing={2}>
        <Grid   item xs={12} sm={12} md={12} lg={12}>
        <Tabs
          value={type}
          sx={{minWidth:'100vw', color:'black'}}
          onChange={(event, newValue) => {
            setType(newValue);
            
          }}
        //   style={{zIndex:'1', paddingBottom: 5, margin:'10px',marginLeft:'36px', position:'fixed', top:'90px', left:'2%', width:'100%'}}
          aria-label="disabled tabs example"
        >
            {data && data?.map((e, i)=>{
                return (
                    <Tab key={i} style={{ width: "23%", color:'default',  }} label={e} />
                )
            })}
        </Tabs>
        </Grid>
             {singleCategory && singleCategory.map((e)=>{
            
          
            return(
                <Grid  key={e.id} item xs={12} sm={6} md={3} lg={4}>
                <BasicCard 
                
                data = {e}
                    
                />
                </Grid>
            )
        })}

        </Grid>
        
        </>
  );
}


