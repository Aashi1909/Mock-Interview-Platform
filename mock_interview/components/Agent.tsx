"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';


enum CallStatus{
    INACTIVE ='INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED='FINISHED'

}
interface SavedMessage{
    role : 'user' | 'assistant' |'system',
    content : string

}
const Agent = ({userName, userId, type } : AgentProps) => {
    const router = useRouter()
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)

    const [messages, setMessages] =  useState<SavedMessage[]>([])
    const lastMessage = messages[messages.length - 1] 
  return (
    <>
    <div className='call-view'>
        <div className='card-interviewer'>
            <div className='avatar'>
                <Image src ="/logo.svg" alt="avatar" width={65} height={55} className='object-cover' />
                {isSpeaking && <span className='animate-speak' />}
            </div>
            <h3>AI Interviewer</h3>

        </div>
        <div className='card-border'>
            <div className='card-content'>
                <Image src="/user-avatar.jpg" alt="avatar" width={540} height={540} className='rounded-full object-cover size-[120px]' />
                <h3>{userName}</h3>

            </div>

        </div>
    </div>
    {
        messages.length >0 &&(
            <div className='transcript-border'>
                <div className='"transcript'>
                    <p key={lastMessage} className={cn('transcript-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100' )}>
                        {lastMessage}
                        

                    </p>

                </div>

            </div>
        )
    }
    <div className='w-full flex justify-center'>
        {callStatus != 'ACTIVE' ? (
            <button className='relative btn-call'>
                <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus != 'CONNECTING' && 'hidden')} />
                <span>{callStatus === 'INACTIVE' || callStatus == ' FINISHED' ? 'Start Call' : 'Connecting...'}</span> 
                <span></span>
            </button>
        ) : (
            <button className='btn-disconnect'>
                <span>End Call</span>
            </button>

        )}

    </div>
    </>
  )
}

export default Agent