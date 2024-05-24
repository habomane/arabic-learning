import { useNavigation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

export default function LevelPage()
{
    const params = useParams();
    const [arabicText, setArabicText] = useState("");
    const [arabicTextArray, setArabicTextArray] = useState([
        {"ar": 'كانت', "en":'was', "pos": 1},
        {"ar": ' ال', "en": 'the', "pos": 2},
        {"ar": 'سيارة', "en": "car", "pos": 3},
        {"ar": ' كبيرة', "en": "big", "pos": 4}
    ]);
    const [englishTranslation, setEnglishTranslation] = useState("The car was big");
    const [arabicHtml, setArabicHtml] = useState("");
    const [answer, setAnswer] = useState("");

    const [score, setScore] = useState({"pos": 1, "tries": 1})
    useEffect(() => {
        arabicHtmlColoring()
        
    }, [score])

    function arabicHtmlColoring()
    {
        const array = arabicTextArray.sort((a, b) => a["pos"] - b["pos"])
        var arabicText = ""

        array.forEach((word) => {
        if(word["pos"] === score["pos"])
        {
            arabicText +=  `<span className="underline">${word["ar"]}</span>`
        }
        else {
            arabicText += word["ar"]
        }
        })

        setArabicHtml(arabicText)
    }

    function checkAnswer(event)
    {

        if(event.key === 'Enter')
            {
                if(arabicTextArray[score["pos"] - 1]["en"] === answer)
                    {
                        setScore({"pos": score["pos"] + 1, "tries": 1})
                        setAnswer("")
                    }
                if(arabicTextArray[score["pos"] - 1]["en"] !== answer && score["tries"] < 3)
                    {
                        setScore({"pos": score["pos"], "tries": score["tries"] + 1})
                        setAnswer("")
                    }
                if(arabicTextArray[score["pos"] - 1]["en"] !== answer && score["tries"] === 3)
                    {
                        setScore({"pos": score["pos"] + 1, "tries": 1})
                        setAnswer("")
                    }
            }
    }
    return (
        <main className="h-[75vh]">

            <section className="flex flex-col justify-center items-center py-5 gap-y-4">
                <h1 className="text-3xl font-head font-semibold">Level: {params.id} </h1>
                <p className="text-sm font-arabic">﷽ </p>
            </section>

            <section className="flex flex-col justify-center items-center py-3 mt-20 gap-y-6">
                <h2 className="text-4xl font-arabic"> {arabicHtml}
                 </h2>
                 <div className="flex flex-wrap justify-between w-[30%] mb-12 items-center">
                 {
                    arabicTextArray.map((item) => {
                        if(item["pos"] < score["pos"])
                            {
                                return <p className="text-2xl font-bold underline tracking-widest" key={item}>{item["en"]}</p>
                            }
                            else {
                                return <p className="text-2xl font-bold" key={item}>{"_ ".repeat(item["en"].length)}</p>
                            }
                    })
                 }
                 </div>
                <input type="text" value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => checkAnswer(e)}
                className="border border-4 border-black py-1"></input>
            </section>
        </main>
    )
}