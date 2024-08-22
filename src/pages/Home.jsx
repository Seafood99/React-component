import React from 'react';
import PriceCard from '../component/PriceCard';
import RecipeCards from '../component/RecipeCards';

export default function Home() {

    const priceCards = [
        {
            price: '19',
            title: 'Starter',
            description: 'Unleash the power of automation.',
            points: [
                "Multi-step-zip",
                "3 Premium Apps",
                "2 User Teams"
            ]
        },
        {
            price: '54',
            title: 'Profesional',
            description: 'Automation tools to take your work to the next level.',
            points: [
                "Multi-step-zip",
                "Unlimited Premium",
                "50 Share Teams",
                "Shared Workspace"
            ]
        },
        {
            price: '89',
            title: 'Company',
            description: 'Automation plus enterprise-grade features.',
            points: [
                "Unlimited Premium",
                "Unlimited User Teams",
                "Advanced Admin",
                "Custom Data Retention"
            ]
        }
    ];

    return (
        <div className='container'>
            <p>Home</p>

            <div className='grid grid-cols-3 gap-3'>
                {
                priceCards.map((card, index) => (
                    <PriceCard
                        key={index}
                        price={card.price}
                        title={card.title}
                        description={card.description}
                        points={card.points}
                        />
                    ))}
                    <RecipeCards/>
            </div>
        </div>
    );
}
