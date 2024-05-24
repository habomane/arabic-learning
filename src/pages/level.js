import { useNavigation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from 'react-router';

export default function LevelPage()
{
    const params = useParams();

    return (
        <div>
            ello this is {params.id}
        </div>
    )
}