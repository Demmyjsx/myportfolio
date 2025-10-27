"use client";

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaComments, FaCode, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const processSteps = [
  {
    title: "Communication",
    description:
      "Prior to initiating any project, I prioritize an initial online meeting with each client for 15-30 minutes. Ensuring a clear understanding of visions, objectives, methodologies, or other concerns, helps us align our goals and expectations from the very beginning.",
    icon: <FaComments />,
    iconStyle: { background: '#2B6CB0', color: '#fff' }
  },
  {
    title: "Design & Development",
    description:
      "Aligning with my clients' specific requirements, preferences, and coding standards. I am dedicated to delivering results that adhere to the industry's best practices while ensuring top-tier quality and optimal performance.",
    icon: <FaCode />,
    iconStyle: { background: '#D69E2E', color: '#fff' }
  },
  {
    title: "Revision",
    description:
      "Clear and constructive feedback with detailed and accurate progress updates will be provided based on project milestones, ensuring my clients are well-informed about the status of their goals. This commitment to transparency is a cornerstone of my professional ethics.",
    icon: <FaCheckCircle />,
    iconStyle: { background: '#38A169', color: '#fff' }
  },
  {
    title: "Finalize",
    description:
      "I deeply respect the objectives and dreams of my clients and respond to their further needs at first time. My foremost aim is to cultivate trust and foster lasting connections with my clients, transforming professional partnerships into long-term friendships.",
    icon: <FaHandshake />,
    iconStyle: { background: '#805AD5', color: '#fff' }
  },
];

export default function Process() {
  return (
    <div className="bg-gray-500 p-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">My Work Process</h2>
      <VerticalTimeline lineColor="#E2E8F0">
        {processSteps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4A5568', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #4A5568' }}
            iconStyle={step.iconStyle}
            icon={step.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-gray-300">{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <div>
        
      </div>
    </div>
  );
}
