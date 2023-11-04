import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
    const sha = () => {
        return `${Math.floor(Math.random() * 33) + 1}.svg`;   
    }
    const navigate = useNavigate();
    useEffect(() => navigate('404'), [navigate]);
    return (
        <div className="flex flex-col items-center justify-center gap-5 p-5">
            <h1 className="text-3xl font-extrabold drop-shadow-2xl">Code 404 page not found :/</h1>
            <img
            loading="lazy"
            className="w-1/2 drop-shadow-2xl"
            src={sha()}/>
        </div>
    )
}