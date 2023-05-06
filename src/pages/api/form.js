import { application } from "../data/application"

export default function handler(req, res) {
    if(req.method === 'GET'){
        res.status(200).json(application)
    }
    else if (req.method ==='POST'){
        const body = req.body

        const newApplication = {
            name: body.name,
            id: body.id,
            title: body.title,
            date: body.date,
            DocID: body.DocValue,
            DocUpload: body.document
        }
        application.push(newApplication)
        res.status(200).json(application)
    }

}