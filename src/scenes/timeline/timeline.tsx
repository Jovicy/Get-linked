import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function Timelines() {
  const timeline = [
    {
      date: '2023-09-23',
      title: 'Hackathon title',
      task: 'Task 1 completed on this day',
    },
    {
      date: '2023-09-24',
      title: 'Hackathon title',
      task: 'Task 2 completed on this day',
    },
    {
      date: '2023-09-24',
      title: 'Hackathon title',
      task: 'Task 2 completed on this day',
    },
    {
      date: '2023-09-24',
      title: 'Hackathon title',
      task: 'Task 2 completed on this day',
    },
    {
      date: '2023-09-24',
      title: 'Hackathon title',
      task: 'Task 2 completed on this day',
    },
    {
      date: '2023-09-24',
      title: 'Hackathon title',
      task: 'Task 2 completed on this day',
    },
    // Add more timeline items here
  ];

  return (
    <div className="w-full flex justify-end items-center mx-auto">
      <VerticalTimeline>
        {timeline.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={<span className="text-2xl font-montserrat font-bold">{index + 1}</span>}
            iconStyle={{ background: '#D434FE', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            contentStyle={{ background: 'none', display: 'flex', justifyContent: 'center', alignItems: "start", boxShadow: 'none', color: "#D434FE", fontWeight: "700", fontFamily: "Montserrat" }}
            contentArrowStyle={{ display: 'none' }}
          >
            <div className='flex flex-col gap-0 justify-center'>
              <div>
                <p className='text-span text-2xl font-black font-montserrat'>{item.title}</p>
              </div>
              <div>
                <p className="text-white text-sm font-normal font-montserrat">{item.task}</p>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timelines;
