import { useEffect,useState } from "react";
import {db} from "../config/firebase";
import { getDocs, collection } from 'firebase/firestore';


export default function Firestore({ message }){
    const [ dbList, setdbList] = useState([]);

    const dbCollectionRef = collection(db, message)

    useEffect(() => {
        const getdbList = async () => {
            try{
            const data = await getDocs(dbCollectionRef);
            const filteredData = data.docs.map((doc) => ({
            ...doc.data(), 
            id: doc.id}));

            setdbList(filteredData);

            } catch (err) {
            console.error(err);
            }
        };

        getdbList();
    }, []);

    return(
        <div>
            {dbList.map((moments) => (
            <div key={moments.id}>
                <h1>{moments.id}</h1>
                <p>Name: {moments.Name}</p>
                <p>Role: {moments.Role}</p>
                <p>Course: {moments.Course}</p>
            </div>
            ))}
        </div>
    )
}