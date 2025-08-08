import { type FC } from "react";

type Tab = {
  id: number;
  name: string;
  linkPath: string;
}

interface TabProps {
  tabs: Tab[]
}

const TopNav:FC<TabProps> = ({tabs}) => {
  return (
    <div className="top-nav-container">
        <div className="top-nav-container--left">
          <p>Cecilia Tran</p>
        </div>
        <div className="top-nav-container--right">
          {tabs.map((t:Tab) => {
            return (
              <a key={t.id} className={t.name} href={t.linkPath} >
                {t.name}
              </a>
            );
          })}
        </div>
    </div>
  )
}

export default TopNav;