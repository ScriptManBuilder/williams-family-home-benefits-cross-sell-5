import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Average Annual Savings',
      description: 'Families save thousands annually on home services, protection plans, and everyday lifestyle expenses',
      value: '$2,800',
      background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)'
    },
    {
      title: 'Home Service Discount',
      description: 'Access exclusive rates on home repairs, maintenance, and protection with significantly below-market pricing',
      value: '45%',
      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Families rate their experience as exceptional, with consistent 5-star reviews for peace of mind',
      value: '97%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Covered Services',
      description: 'Access to home protection, family care, identity protection, and lifestyle benefits nationwide',
      value: '500+',
      background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Protect Your Family, Save Every Day</StatsSectionTitle>
        <StatsSectionDescription>
          See how our exclusive family & home benefits program delivers extraordinary value and complete peace of mind.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
