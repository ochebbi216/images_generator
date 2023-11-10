const api = "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";
const api2 = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const generate = async () => {
    // request
    const promptValue = inp.value.trim();

    if (promptValue === '') {
        alert('Please enter a prompt.');
        return;
    }
    console.log(promptValue)
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api2}`
        },
        body: JSON.stringify({

            "prompt": promptValue,
            //"n": 3,
            //"size": "1024x1024" one of ['256x256', '512x512', '1024x1024', '1024x1792', '1792x1024']
        })
    }
console.log(methods)
    try {
        const res = await fetch("https://api.openai.com/v1/images/generations",methods);

        // if (res.status === 429) {
        //     // If rate-limited, wait for a while and retry
        //     await delay(200); // Adjust the delay as needed
        //     return generate();
        // }
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // response
        const alldata = await res.json();
        console.log(alldata);

        const listImages = alldata.data;
        images.innerHTML = '';

        listImages.forEach(photo => {
            const allimages = document.createElement("div");
            images.append(allimages);

            const img = document.createElement("img");
            allimages.append(img);
            img.src = photo.image_url;
        });
    } catch (error) {
        console.error("Error:", error);
    }
};
