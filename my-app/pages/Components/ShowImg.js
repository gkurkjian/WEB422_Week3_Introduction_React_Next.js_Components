export default function ShowImg() {
    
    let imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVHu5rXAK8KUSep6zlSxc_hg5m1oMLsvvC1sGRDeuFrMyoZFK52QShTR0F3hza4pMG1w&usqp=CAU"
    let alt = "Seneca College"

    return (
        <>
            {/* This way it'll not work because there's not wrapped up in curly bracts  */}
            {/* <img src="imgUrl" alt="alt"/> */}

            {/* This will be the right way */}
            <img src={imgUrl} alt={alt}/>

            <br />
            {/* The class name passed it must be className="..." not class="..." */}
            <img className="coolImage" src={imgUrl} alt={alt}/>
        </>
    )
}