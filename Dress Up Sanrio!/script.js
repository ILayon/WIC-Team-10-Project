const outfits = {
    top: [
        "HelloKittyClothes/Top/Top.png",
        "HelloKittyClothes/Top/Sweater2.png",
        "HelloKittyClothes/Top/Green.png",
        "HelloKittyClothes/Top/Brown_Top.png",
        ""
    ],
    jeans: [
        "HelloKittyClothes/Jeans/Black_Pants.png", 
        "HelloKittyClothes/Jeans/Blue_Pants.png",
        "HelloKittyClothes/Jeans/Grey_Pants-2.png",
        ""
    ],
    skirt: [
        "HelloKittyClothes/Skirt/Pink_Skirt.png",
        "HelloKittyClothes/Skirt/White_Skirt.png",
        "HelloKittyClothes/Skirt/Brown_Skirt.png",
        "",
    ],
    accessory: [
        "HelloKittyClothes/Accessory/Headphones.png",
        "HelloKittyClothes/Accessory/Pink_Ribbon.png",
        "HelloKittyClothes/Accessory/Red_Ribbon.png",
        "",
        "HelloKittyClothes/Accessory/Pink_Ribbon.png",
        ""
    ],
};

const currentIndex = {
    top: 0,
    jeans: 0,
    skirt: 0,
    accessory: 0,
};

function changeOutfit(type) {
    currentIndex[type] = (currentIndex[type] + 1) % outfits[type].length;
    const item = document.getElementById(type);
    console.log("Changing outfit for:", type); 
    console.log("Current index:", currentIndex[type]); 
    console.log("New outfit path:", outfits[type][currentIndex[type]]);
    if (outfits[type][currentIndex[type]]) {
        console.log(type);
        item.src = outfits[type][currentIndex[type]];
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
}

document.getElementById('jeans-button').addEventListener('click', function () {
    changeOutfit('jeans');
});

document.getElementById('skirt-button').addEventListener('click', function () {
    changeOutfit('skirt');
});

document.getElementById('accessory-button').addEventListener('click', function () {
    changeOutfit('accessory');
});