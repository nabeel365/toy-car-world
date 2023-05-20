import { useEffect } from "react"


const pageTitle = title => {
    useEffect(() => {
        document.title = `ToyCarWorld | ${title}` ;
    }, [title])
}


export default pageTitle;