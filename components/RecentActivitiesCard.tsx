
import React, { useState, useEffect } from 'react';
import { RECENT_ACTIVITIES } from '../constants';
import { RecentActivity, ModalData } from '../types';

interface RecentActivitiesCardProps {
  onCardClick: (data: ModalData) => void;
}

const RecentActivitiesCard: React.FC<RecentActivitiesCardProps> = ({ onCardClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (RECENT_ACTIVITIES.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % RECENT_ACTIVITIES.length);
        }, 5000); // Change activity every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleActivityClick = (activity: RecentActivity) => {
        onCardClick({
            title: activity.title,
            image: activity.imageUrl,
            content: (
                <div className="space-y-4">
                    <div>
                        <p className="font-semibold">📅 Data:</p>
                        <p>{activity.date}</p>
                    </div>
                     <div>
                        <p className="font-semibold">📍 Local:</p>
                        <p>{activity.location}</p>
                    </div>
                    <div>
                         <p className="font-semibold">📝 Descrição:</p>
                        <p>{activity.details}</p>
                    </div>
                    {activity.link && (
                        <a 
                            href={activity.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors mt-2"
                        >
                            🔗 Link para mais informações
                        </a>
                    )}
                </div>
            ),
        });
    };

    if (RECENT_ACTIVITIES.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold text-primary mb-4">Atividades Recentes</h3>
                <p className="text-gray-500">Nenhuma atividade recente a ser exibida.</p>
            </div>
        );
    }
    
    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col min-h-[400px]">
            <h3 className="text-xl font-bold text-primary mb-4">Atividades Recentes</h3>
            <div 
                className="relative flex-grow overflow-hidden cursor-pointer group rounded-lg" 
                onClick={() => handleActivityClick(RECENT_ACTIVITIES[currentIndex])}
                role="button"
                aria-label={`Ver detalhes sobre ${RECENT_ACTIVITIES[currentIndex].title}`}
                tabIndex={0}
            >
                {RECENT_ACTIVITIES.map((activity, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        aria-hidden={index !== currentIndex}
                    >
                        <img src={activity.imageUrl} alt={activity.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h4 className="font-bold text-lg leading-tight group-hover:underline">{activity.title}</h4>
                            <p className="text-sm mt-1">{activity.date}</p>
                        </div>
                    </div>
                ))}

                {/* Dots for navigation */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {RECENT_ACTIVITIES.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Ir para atividade ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivitiesCard;
