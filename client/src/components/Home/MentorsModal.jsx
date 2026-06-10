import React, { useState } from 'react'
import './MentorModal.css'
import { FormComponent } from '../Common/FormComponent';
const degrees = [
    {
        id: 1,
        name: 'Ug Courses',
        courses: [
            {
                id: 1,
                name: 'Online BA',
                specializations: [
                    {
                        id: 1,
                        name: 'BA Honours',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 2,
                        name: 'General',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 3,
                        name: 'Journalism and Mass Communication',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 4,
                        name: 'Political Science',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 5,
                        name: 'Hindi',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 6,
                        name: 'Economics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 7,
                        name: 'English',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 8,
                        name: 'Sociology',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 9,
                        name: 'History',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 10,
                        name: 'International Relations',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 11,
                        name: 'Psychology',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                ],
            },
            {
                id: 2,
                name: 'Online BBA',
                specializations: [
                    {
                        id: 1,
                        name: 'General',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 2,
                        name: 'HRM',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 3,
                        name: 'Marketing',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 4,
                        name: 'Operations',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 5,
                        name: 'Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 6,
                        name: 'Digital Marketing',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 7,
                        name: 'Banking and Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 8,
                        name: 'Business Analytics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 9,
                        name: 'Retail and Sales Management',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 10,
                        name: 'Logistics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 11,
                        name: 'Hospital Management',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 12,
                        name: 'Investment Banking',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 13,
                        name: 'Event Management',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                ],
            },
            {
                id: 3,
                name: 'Online BBA Dual',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                    ],

            },
            {
                id: 4,
                name: 'Online BCA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'General',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 2,
                            name: 'Data Science and Big Data Analytics',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 3,
                            name: 'Data Analytics',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 4,
                            name: 'AI ML',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 5,
                            name: 'Cloud and Security',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 6,
                            name: 'Cyber Security',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 7,
                            name: 'CS IT',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 8,
                            name: 'Blockchain Technology',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 9,
                            name: 'UI UX Design',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                    ],
            },
            {
                id: 5,
                name: 'Online B.COM',
                specializations: [
                    {
                        id: 1,
                        name: 'B.com Honours',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 2,
                        name: 'General',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 3,
                        name: 'Accounting and Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 4,
                        name: 'Banking and Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 5,
                        name: 'Banking and Insurance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 6,
                        name: 'Marketing Management',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 7,
                        name: 'International Business',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 8,
                        name: 'International Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                ],
            },
            {
                id: 6,
                name: 'Online BSC',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'BSC Honours',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 2,
                            name: 'IT',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 1,
                            name: 'CS',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']
                        },
                        {
                            id: 1,
                            name: 'Data Science & AI',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 7,
                name: 'Distance BA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 8,
                name: 'Distance BBA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 9,
                name: 'Distance BBA Dual',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 10,
                name: 'Distance BCA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 11,
                name: 'Distance B.COM',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 12,
                name: 'Distance BSC',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],

            },

        ],
    },
    {
        id: 2,
        name: 'Pg Courses',
        courses: [
            {
                id: 13,
                name: 'Online MA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'English',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 2,
                            name: 'Journalism and Mass Communication',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 3,
                            name: 'Economics',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 4,
                            name: 'History',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 5,
                            name: 'Political Science',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 6,
                            name: 'Sociology',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },

                    ],

            },
            {
                id: 14,
                name: 'Online MBA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'Finance',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 2,
                            name: 'HR',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 3,
                            name: 'IT',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 4,
                            name: 'International Business Management',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 5,
                            name: 'Data Science',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 6,
                            name: 'Data Science and Analytics',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 7,
                            name: 'Healthcare Management',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 8,
                            name: 'Banking and Finance',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 9,
                            name: 'Business Analytics',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 10,
                            name: 'Retail and Sales Management',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 11,
                            name: 'Logitics',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 12,
                            name: 'Hospital Management',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 13,
                            name: 'Investment Banking',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                        {
                            id: 14,
                            name: 'Event Management',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ]

            },
            {
                id: 15,
                name: 'Online MBA Dual',

                specializations: [
                    {
                        id: 1,
                        name: 'Data Science and Analytics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 2,
                        name: 'Enterprenuership and Leadership',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 3,
                        name: 'HR and Marketing',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 4,
                        name: 'Marketing and Finace',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 5,
                        name: 'Hospital Administraion and Healthcare',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 6,
                        name: 'Finance and Accounting',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 7,
                        name: 'HRM and Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 8,
                        name: 'IT and FinTech',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 9,
                        name: 'Marketing and Sales',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 10,
                        name: 'Production and Operation',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 11,
                        name: 'Finance and Accounting',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 12,
                        name: 'Finance and Leadership',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                ]

            },
            {
                id: 16,
                name: 'Online MCA',
                specializations: [
                    {
                        id: 1,
                        name: 'General',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 2,
                        name: 'Data Analytics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 3,
                        name: 'Data Science',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 4,
                        name: 'AI ML',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 5,
                        name: 'Cloud and Security',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 6,
                        name: 'Cyber Security',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 7,
                        name: 'CS IT',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 8,
                        name: 'Blockchain Technology',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 9,
                        name: 'UI UX Design',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                ]

            },
            {
                id: 17,
                name: 'Online M.COM',
                specializations: [
                    {
                        id: 1,
                        name: 'M.com Honours',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 2,
                        name: 'General',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 3,
                        name: 'Accounting and Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 4,
                        name: 'Banking and Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 5,
                        name: 'International Finance',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 6,
                        name: 'Financial Management',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 7,
                        name: 'Fintech',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                ]
            },
            {
                id: 18,
                name: 'Online MSC',
                specializations: [
                    {
                        id: 1,
                        name: 'Mathematics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 2,
                        name: 'Business Analytics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 3,
                        name: 'Statistics',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 4,
                        name: 'CS',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    }, {
                        id: 5,
                        name: 'Data Science',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },
                    {
                        id: 6,
                        name: 'AI & ML',
                        qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                    },

                ]
            },
            {
                id: 19,
                name: 'Distance MA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],

            },
            {
                id: 20,
                name: 'Distance MBA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],

            },
            {
                id: 21,
                name: 'Distance MCA',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],

            },
            {
                id: 22,
                name: 'Distance M.COM',

                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 23,
                name: 'Distance MSC',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
        ],
    },
    {
        id: 3,
        name: 'Skills & Certificate Courses',
        courses: [
            {
                id: 1,
                name: 'Professional Certificate Programs',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 2,
                name: 'Online Accounting Certificates',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 3,
                name: 'Data Science Certification',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 4,
                name: 'Full stck Web Development',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 5,
                name: 'Cyber Security Certification',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 6,
                name: 'Cloud Computing Certification',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 7,
                name: 'Blockchain Developer Certification',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 8,
                name: 'IoT Certification',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
        ],
    },


    {
        id: 4,
        name: 'Diploma Courses',
        courses: [
            {
                id: 1,
                name: 'Computer Applications',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 2,
                name: 'Cyber Security',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 3,
                name: 'AI & ML',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 4,
                name: 'Data Analytics',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 5,
                name: 'IoT',
                specializations:
                    [
                        {
                            id: 1,
                            name: 'No Specialization',
                            qualifications: ['Post Graduate', 'Under Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder']

                        },
                    ],
            },
            {
                id: 6,
                name: 'Web & App development',
            },
        ],
    },
]; const DegreeSelector = ({ onSelect }) => {
    return (
        <div>
            <h2>Select a Degree:</h2>
            {degrees.map(degree => (
                <div className="mentors-card" key={degree.id} onClick={() => onSelect(degree.id)}>{degree.name}</div>
            ))}
        </div>
    );
};

const CourseSelector = ({ degreeId, onSelect }) => {
    const degree = degrees.find(degree => degree.id === degreeId);

    return (
        <div>
            <h2>Select a Course:</h2>
            {degree.courses.map(course => (
                <div className="mentors-card" key={course.id} onClick={() => onSelect(course.id)}>{course.name}</div>
            ))}
        </div>
    );
};

const SpecializationSelector = ({ degreeId, courseId, onSelect }) => {
    const degree = degrees.find(degree => degree.id === degreeId);
    const course = degree.courses.find(course => course.id === courseId);

    return (
        <div>
            <h2>Select a Specialization:</h2>
            {course.specializations.map(specialization => (
                <div className="mentors-card" key={specialization.id} onClick={() => onSelect(specialization)}>{specialization.name}</div>
            ))}
        </div>
    );
};

const QualificationSelector = ({ specialization, onSelect }) => {
    return (
        <div>
            <h2>Select a Qualification:</h2>
            {specialization.qualifications.map(qualification => (
                <div className="mentors-card" key={qualification} onClick={() => onSelect(qualification)}>{qualification}</div>
            ))}
        </div>
    );
};
export const MentorsModal = ({ closeModal }) => {
    const [enquiry, setEnquiry] = useState(null)
    const handleFormSubmit = (data) => {
        setEnquiry(data);
        openComparisonPage(data);
    };

    const openComparisonPage = () => {
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(`
            <html>
              <head>
                <title>Comparison Page</title>
                <link rel="stylesheet" href="comparison-page.css">
              </head>
              <body>
                <div id="comparison"></div>
              </body>
            </html>
          `);
            newWindow.document.close();
            renderComparisonPage(newWindow.document.getElementById('comparison'));
        } else {
            alert('Popup blocked! Please allow popups to see the comparison page.');
        }
    };

    const renderComparisonPage = (container) => {
        // Sample colleges data for demonstration
        const colleges = [
            { name: 'Lovely Professional University', approvals: 'UGC / AICTE / AIU / NIRF / WES / NAAC A++ / SACS COC', universimg: require('../../assets/partner/lpu-logo.png'), baFees: 18000, maFees: 18000, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 43000, bcaFees: 28000, mcaFees: 33000, bcomFees: 0, mcomFees: 23000, mscFees: 18000 },
            { name: 'Manipal university Jaipur', approvals: 'UGC / AICTE / AIU NIRF / WES / NAAC A+ ', universimg: require('../../assets/partner/manipal-logo.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 35000, bbaFees: 22500, mbaFees: 43750, bcaFees: 22500, mcaFees: 39500, bcomFees: 16500, mcomFees: 27000, mscFees: 0 },
            { name: 'GLA University', approvals: 'UGC / AICTE / AIU/ NIRF / NAAC A+', universimg: require('../../assets/partner/GLA-U-logo.jpg'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 9250, mbaFees: 16500, bcaFees: 9250, mcaFees: 14000, bcomFees: 6500, mcomFees: 0, mscFees: 0 },
            { name: 'Jain University', approvals: 'UGC DEB / AICTE / NIRF / NAAC A++', universimg: require('../../assets/partner/jain-logo.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 27500, mbaFees: 40000, bcaFees: 0, mcaFees: 37500, bcomFees: 21250, mcomFees: 23000, mscFees: 0 },
            { name: 'Dy Patil University', approvals: 'UGC DEB / AICTE / AIU / NIRF / WES / NAAC A++ / ISO', universimg: require('../../assets/partner/dypu.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 25000, mbaFees: 50000, bcaFees: 0, mcaFees: 0, bcomFees: 0, mcomFees: 0, mscFees: 0 },
            // { name: 'Amity University', approvals: 'UGC / AICTE / AIU / NIRF / WES, NAAC, A , SAAC COC', universimg: require('../../assets/partner/'), bbaFees: 25000, mbaFees: 50000 },
            { name: 'Sikkim Manipal University', approvals: 'UGC / AICTE / NIRF / NAAC A+', universimg: require('../../assets/partner/smu.png'), baFees: 12500, maFees: 18750, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 0, bcaFees: 0, mcaFees: 24500, bcomFees: 12500, mcomFees: 22500 },
            { name: 'Chandigarh University', approvals: 'UGC DEB / AICTE / AIU / NIRF / WES / NAAC A++ / QS / HBPE / ACCA', universimg: require('../../assets/partner/chandigarh-university-logo.png'), maFees: 25000, bajmcFees: 22500, majmcFees: 25000, bbaFees: 26000, mbaFees: 50000, bcaFees: 27500, mcaFees: 30000, bcomFees: 0, mcomFees: 32500, mscFees: 30000 },
            { name: 'Vivekananda Global University', approvals: 'UGC / AICTE / AIU / NAAC A+', universimg: require('../../assets/partner/vgu_logo.jpg'), baFees: 10000, maFees: 16000, bajmcFees: 0, majmcFees: 0, bbaFees: 19000, mbaFees: 32500, bcaFees: 19000, mcaFees: 32500, mscFees: 16000, bcomFees: 0, mcomFees: 0, },
            { name: 'Maharishi Markandeshwar University', approvals: 'UGC / AICTE / AIU/ NAAC A++ / ISO', universimg: require('../../assets/partner/maharishi.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 15000, mbaFees: 27500, bcaFees: 15000, mcaFees: 0, bcomFees: 17500, mcomFees: 0, mscFees: 17500 },
            { name: 'Jaipur National University', approvals: 'UGC / AICTE / AIU / NIRF / WES / NAAC A++ / SACS COC', universimg: require('../../assets/partner/jnu-logo1.png'), baFees: 18000, maFees: 18000, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 43000, bcaFees: 28000, mcaFees: 33000, bcomFees: 0, mcomFees: 23000, mscFees: 18000 },

        ];

        // Extract fees based on selected course
        const selectedCourseData = colleges.map(college => ({
            name: college.name,
            image: college.image,
            approvals: college.approvals,
            fees: college[enquiry.course + 'Fees'], // Get fees based on selected course
        }));



        // Sort colleges by fees
        const sortedColleges = selectedCourseData.sort((a, b) => a.fees - b.fees);

        // Generate HTML for comparison page
        const htmlContent = `
    <div className="compare-detalis-area">
      <h1>Comparison Page</h1>
      <div className="academic-courses-area">
            <span>College Name</span>
            <span>Image</span>
            <span>Approvals</span>
            <span>Fees</span>
          </div>
        <div className="uni-col">
          ${sortedColleges.map(college => `
          <div className="academic-courses-area">
          <img src="${college.image}" alt="${college.name}">
          <div class="info">
            <h2>${college.name}</h2>
            <p>Approvals: ${college.approvals}</p>
            <p>Fees: ${college.fees}</p>
          </div>
           </div>
          `).join('')}
        </div>
      </div>
      </div>
    `;

        container.innerHTML = htmlContent;
    };

    const [selectedDegree, setSelectedDegree] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedSpecialization, setSelectedSpecialization] = useState(null);
    const [selectedQualification, setSelectedQualification] = useState(null);

    const handleDegreeSelect = (degreeId) => {
        setSelectedDegree(degreeId);
        setSelectedCourse(null);
        setSelectedSpecialization(null);
        setSelectedQualification(null);
    };

    const handleCourseSelect = (courseId) => {
        setSelectedCourse(courseId);
        setSelectedSpecialization(null);
        setSelectedQualification(null);
    };

    const handleSpecializationSelect = (specialization) => {
        setSelectedSpecialization(specialization);
        setSelectedQualification(null);
    };

    const handleQualificationSelect = (qualification) => {
        setSelectedQualification(qualification);
    };
    const handleSubmit = () => {
        // Handle submission
        console.log('Submitted:', selectedDegree, selectedCourse, selectedSpecialization, selectedQualification);
    };

    return (
        <>
            <div className="modal-container">
                <div className="modal-conten" style={{}}>
                    <div className="close-btn" onClick={closeModal}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>

                    <div className="modal-content">


                        <div className="mentordetail-card" >
                            <div>
                                <h1>Degree Selector App</h1>
                                {!selectedDegree && <DegreeSelector onSelect={handleDegreeSelect} />}
                                {selectedDegree && !selectedCourse && <CourseSelector degreeId={selectedDegree} onSelect={handleCourseSelect} />}
                                {selectedDegree && selectedCourse && !selectedSpecialization && (
                                    <SpecializationSelector
                                        degreeId={selectedDegree}
                                        courseId={selectedCourse}
                                        onSelect={handleSpecializationSelect}
                                    />
                                )}
                                {selectedDegree && selectedCourse && selectedSpecialization && !selectedQualification && (
                                    <QualificationSelector specialization={selectedSpecialization} onSelect={handleQualificationSelect} />
                                )}
                                {selectedDegree && selectedCourse && selectedSpecialization && selectedQualification && (
                                    <div className='modal-mentor'>
                                        {/* <div>
                                            <h2>Selected:</h2>
                                            <p>Degree: {selectedDegree}</p>
                                            <p>Course: {selectedCourse}</p>
                                            <p>Specialization: {selectedSpecialization.name}</p>
                                            <p>Qualification: {selectedQualification}</p>
                                        </div> */}
                                        <div className="form-area">
                                            <FormComponent handleFormSubmit={handleFormSubmit} />
                                        </div>

                                    </div>
                                )}
                            </div>


                        </div>

                    </div>
                    {/* <div className="sing-buttom mb-20">
                        <div className="sing-btn sign" type="submit" onClick={goToNextPage}>Next</div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
