import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import linkedin from 'assets/images/linkedin.svg'
import github from 'assets/images/github.svg'
import resume from 'assets/images/resume.svg'


export default function Home(path: RouteComponentProps): JSX.Element {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col h-screen justify-center items-center gap-4">
        <span className="text-8xl lg:text-9xl font-bold text-gray-800">RHEN</span>
        <span className="text-2xl"> {'<'} Frontend Engineer  {'/>'}</span>
        <div className="flex flex-row gap-8">
          <Assets />
        </div>
      </div>
    </div>
  )
}


interface InfoLinks {
  url: string;
  icon: string
}
type InfoProps = "linkedin" | "github" | "resume";

const Info: Record<InfoProps, InfoLinks> = {
  linkedin: {
    url: 'https://www.linkedin.com/in/rhenmarkcallado/',
    icon: linkedin
  },
  github: {
    url: 'https://github.com/okrhen',
    icon: github
  },
  resume: {
    url: 'https://drive.google.com/file/d/1cYw3FJa_dPlbK9_FsS2LMYDdhtmzGot-/view?usp=sharing',
    icon: resume
  },
}

function Assets(): JSX.Element {
  return (
    <>
      {
        (Object.keys(Info) as Array<keyof typeof Info>).map((item: InfoProps) => {
          const detail = Info[item]
          return (
            <a href={detail.url} rel="noopener noreferrer" target="_blank">
              <img src={detail.icon} alt={item} className="h-12" />
            </a>
          )
        })
      }
    </>
  )
}