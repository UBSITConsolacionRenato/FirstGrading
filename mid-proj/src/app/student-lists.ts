import { Students } from "./student";

//instantiated 3 students for student-list.ts
export const STUDENTS: Students[]=[
    {
        id: 20215151,
        fname: 'Anna',
        lname: 'Banana',
        Course: 'BSCS',
        YrLevel: '1',
        contactNum: '09187712247',
        dateEnrolled: '2021',
        picture: "assets/profile.png",
        bdate: new Date(2001, 3, 30)
    },
    {
        id: 20216969,
        fname: 'John',
        lname: 'Doe',
        Course: 'BSCpE',
        YrLevel: '3',
        contactNum: '09694325169',
        dateEnrolled: '04/05/2020',
        picture: "assets/profile.png",
        bdate: new Date(2000, 4, 20)
    }, {
        id: 20210548,
        fname: 'Nami',
        lname: 'Deym',
        Course: 'BSIT',
        YrLevel: '2',
        contactNum: '09177461247',
        dateEnrolled: '08/08/2021',
        picture: "assets/profile.png",
        bdate: new Date(2002, 7, 19)
    },
]