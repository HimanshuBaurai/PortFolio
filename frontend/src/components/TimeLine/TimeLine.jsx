import React from 'react';
import './TimeLine.scss';
import { useInView } from 'react-intersection-observer';
import SEO from '../SEO.jsx';  

const TimelineItem = ({ position, image, title, period, description, delay, isInView }) => {
    const containerClass = `Tcontainer ${position}-container ${isInView ? 'animate' : ''}`;

    return (
        <div className={containerClass} style={{ animationDelay: `${delay}s` }}>
            <div className="timeline-icon">
                <img src={image} alt={title} />
                <div className="icon-backdrop"></div>
            </div>
            <div className="text-box">
                <h2>{title}</h2>
                <small>{period}</small>
                {Array.isArray(description) ? (
                    description.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                    <p>{description}</p>
                )}
                <span className={`${position}-container-arrow`}></span>
            </div>
        </div>
    );
};

const TimeLine = () => {
    const [timelineRef, timelineInView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const timelineData = [
        {
            position: 'left',
            image: 'CBSE.jpg',
            title: 'AISCE/CBSE (Class 10th)',
            period: '2018-2019',
            description: 'Passed with 92.6% from Pioneer Convent Sr. Sec. School, Delhi.',
            delay: 0
        },
        {
            position: 'right',
            image: 'CBSE12.png',
            title: 'AISSCE/CBSE (Class 12th)',
            period: '2020-2021',
            description: 'Passed with 95.2% from Pioneer Convent Sr. Sec. School, Delhi.',
            delay: 0.2
        },
        {
            position: 'left',
            image: 'IIT-JEE.jpg',
            title: 'JEE Mains Achievement',
            period: '2021',
            description: 'Attained AIR 5410 (out of 11 Lac+ students) with 99.5077 percentile.',
            delay: 0.4
        },
        {
            position: 'right',
            image: 'DTU.png',
            title: 'Delhi Technological University',
            period: '2021-2025',
            description: 'Pursuing B.Tech in Computer Engineering with CGPA 9.14/10.',
            delay: 0.6
        },
        {
            position: 'left',
            image: 'yuvaan.jpeg',
            title: 'YUVAAN- Literature and Film Festival',
            period: '2021-present',
            description: 'Corporate Executive, managing sponsorship activities and driving successful collaboration.',
            delay: 0.8
        },
        {
            position: 'right',
            image: 'mern.png',
            title: 'Full Stack Development',
            period: '2022-2023',
            description: 'Built KnowledgeFlow educational platform with React/Redux frontend and Node.js backend, featuring real-time payment processing.',
            delay: 1.0
        },
        {
            position: 'left',
            image: 'code.jpg',
            title: 'Competitive Programming',
            period: '2023-2024',
            description: [
                '5 Star coder at HackerRank',
                '4 Star rated coder at LeetCode (max rating: 2003, Top 2.67%)',
                '3 Star rated coder at CodeChef (max rating: 1654)'
            ],
            delay: 1.2
        },
        {
            position: 'right',
            image: 'adobe.png', // You'll need to add this image
            title: 'Adobe: Product Intern',
            period: 'May 2024-Aug 2024',
            description: [
                'Evaluated and optimized multimodal LLMs, achieving 97% match rate in category accuracy.',
                'Implemented Low-Rank Adaptation (LoRA) for fine-tuning models under hardware constraints.'
            ],
            delay: 1.4
        },
        {
            position: 'left',
            image: 'ml.png', // You'll need to add this image
            title: "ML & Data Science",
            period: '2024-Present',
            description: [
                'Learned and implemented various ML algorithms including CNN, RNN, and LSTM.',
            ],
            delay: 1.6
        },
        {
            position: 'right',
            image: 'amazon.png', // You'll need to add this image
            title: 'Amazon ML Challenge',
            period: '2024',
            description: 'Secured Team AIR 77 out of 74,825 participants in the Amazon ML Challenge 2024.',
            delay: 1.8
        },
        {
            position: 'left',
            image: 'ai.png', // You'll need to add this image
            title: 'AI & Agentic Systems',
            period: '2025-Present',
            description: 'Engineered Nexus AI multi-agent intelligence platform with 8 specialized agents, achieving 10,000x faster agent creation.',
            delay: 1.8
        },
    ];

    const timelineEvents = timelineData.map(item => ({
        "@type": "EducationalOccupationalCredential",
        "name": item.title,
        "description": Array.isArray(item.description) ? item.description.join(". ") : item.description,
        "dateCreated": item.period.split('-')[0],
        "validUntil": item.period.split('-')[1] === "Present" ? new Date().getFullYear().toString() : item.period.split('-')[1]
    }));

    return (
        <>
            <SEO 
                title="Journey & Experience | Himanshu Baurai - Education & Career Timeline"
                description="Explore Himanshu Baurai's educational and professional journey from school achievements to Adobe internship and AI development experience. Timeline of accomplishments and milestones."
                keywords="Himanshu Baurai Journey, DTU Computer Engineering, Adobe Intern Experience, JEE Mains Achievement, Educational Background, Career Timeline, Competitive Programming, Amazon ML Challenge"
                type="website"
            >
                {/* Timeline-specific structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": timelineData.map((item, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": item.title.includes("University") || item.title.includes("CBSE") ? "EducationalOccupationalCredential" : 
                                        item.title.includes("Intern") ? "WorkExperience" : "Event",
                                "name": item.title,
                                "description": Array.isArray(item.description) ? item.description.join(". ") : item.description,
                                "startDate": item.period.split('-')[0],
                                "endDate": item.period.split('-')[1] === "Present" ? new Date().getFullYear().toString() : item.period.split('-')[1],
                                "image": window.location.origin + "/" + item.image
                            }
                        }))
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Himanshu Baurai",
                            "alumniOf": [
                                {
                                    "@type": "EducationalOrganization",
                                    "name": "Delhi Technological University",
                                    "sameAs": "https://dtu.ac.in/"
                                },
                                {
                                    "@type": "EducationalOrganization",
                                    "name": "Pioneer Convent Sr. Sec. School"
                                }
                            ],
                            "hasCredential": timelineEvents,
                            "hasOccupation": {
                                "@type": "Occupation",
                                "name": "Product Intern",
                                "occupationLocation": {
                                    "@type": "Organization",
                                    "name": "Adobe"
                                }
                            }
                        }
                    })}
                </script>
            </SEO>
            
            <section className="timeline-section" id="journey">
                <div className="section-title">
                    <h2>My Journey</h2>
                    <div className="underline"></div>
                    <p>The path that shaped my skills and experiences</p>
                </div>

                <div className="timeline" ref={timelineRef}>
                    <div className="timeline-progress"></div>

                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            position={item.position}
                            image={item.image}
                            title={item.title}
                            period={item.period}
                            description={item.description}
                            delay={item.delay}
                            isInView={timelineInView}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default TimeLine;