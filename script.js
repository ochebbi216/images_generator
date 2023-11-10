const api = "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";
const api2 = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const generate = async () =>{
    // request
    const methods={
        method:"POST",
        headers:{
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256x256" //one of ['256x256', '512x512', '1024x1024', '1024x1792', '1792x1024']
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations",methods)
    // response
    const alldata = await res.json();
    console.log(alldata)
    const listImages = alldata.data;
    images.innerHTML=''
    listImages.map(photo =>{
        const allimages = document.createElement("div")
        images.append(allimages)
        const img = document.createElement("img")
        allimages.append(img)
        img.src= photo.image_url
    })
} 
