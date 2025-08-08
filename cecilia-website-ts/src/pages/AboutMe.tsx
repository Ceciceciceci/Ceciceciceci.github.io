import React, { useCallback, useEffect, useRef } from 'react';
import Skills from '../components/Skills';

type MySkill = {
  id: number,
  name: string
}

type Color = {
  id: number;
  hex: string;
}

const AboutMe: React.FC = () => {
  const skillsList: MySkill[] = [
    {id: 1, name: 'React'},
    {id: 2, name: 'HTML'},
    {id: 3, name: 'CSS'},
    {id: 4, name: 'JS'}
  ]

  // function to change color
  const colorChangeText = useRef<HTMLSpanElement>(null);

  const changeColor = useCallback(() => {
    const colorList: Color[] = [
      {id: 1, hex: '#008986'},
      {id: 2, hex: '#fbb760'},
      {id: 3, hex: '#f1765c'}
    ];
    // get a random id
    const colorId:number = randomColorId(0, colorList.length - 1);
    // call to get color from list
    const color:string = colorList[colorId]?.hex;
    // set color
    if (colorChangeText.current) {
      colorChangeText.current.style.color = color;
    }
  }, []);

  const randomColorId = (min:number, max:number) => {
    // Math random id
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomId:number = Math.floor(Math.random() * (max - min + 1) + min);
    return randomId;
  }

  useEffect(() => {
      const interval = setInterval(() => {
        changeColor();
      }, 1000);

      return () => clearInterval(interval);
  }, [changeColor]);

  return(
    <>
      <section id="about" className="about-container">
        <h1 className="heading">Hi, my name is <span className="my-name" ref={colorChangeText}>Cecilia Tran!</span></h1>
        <p className="sub-heading">
          A <strong>software engineer</strong> (with a focus on front-end) and <strong>an ux designer and ui designer</strong>.<br />
          I like to design creative solutions for user experiences where tech intersects art. 
          Currently, I am dabbling and learning ReactJS, Typescript and UX Design. 
          My hobbies include video games, drawing, graphic design, hiking, anime, cartoons, sewing, knitting and baking.
          Other interests include animation, computer graphics, and interaction design.
        </p>
        <div className="skills-container">
            <Skills skills={skillsList} />
        </div>
        <div className="work-summary-container">

        </div>
      </section>
    </>
  )
}

export default AboutMe;