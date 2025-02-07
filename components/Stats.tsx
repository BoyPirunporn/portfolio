import { skills } from '@/lib/data';
import { EachElement } from '@/lib/utils';
import CountUp from 'react-countup'
const stats = [
    { num: 4, text: "Years of experience" },
    { num: 5, text: "Projects completed" },
    { num: skills.skillLists.length, text: "Techonologies of experience" },
]
const Stats = () => {
    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
                    <EachElement
                        of={stats}
                        render={(item,index) => (
                            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className='text-4xl xl:text-6xl font-semibold' />

                                <p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px'} leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section >
    );
}

export default Stats;