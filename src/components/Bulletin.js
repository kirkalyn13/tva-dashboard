import React from 'react'
import BulletinItem from './BulletinItem'
import Text from './Text'
import bulletinItems from '../data/bulletin.json'

const bulletinTitle = "THE NEXUS BULLETIN"
const bulletinContent = `Your centralized briefing on the latest confirmed Nexus Events across the Sacred Timeline. Updated in real time as our analysts process incoming anomaly reports from every corner of known history — past, present, and future.`

export const Bulletin = () => {
  return (
    <>
        <div className="container-bulletin">
                <img src="tva_logo.png" className="img-members" width="200" height="200" position="sticky" alt=""/>
                <Text title={bulletinTitle} content={bulletinContent} />
            </div>
        <div className="bulletin">
            {bulletinItems.map(item => <BulletinItem title={item["title"]} content={item["content"]} imageSrc={item["imageSrc"]} />)}
        </div>
    </>
  )
}
