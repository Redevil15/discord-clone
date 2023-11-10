import ChatHeader from '@/components/chat/chat-header';
import ChatInput from '@/components/chat/chat-input';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'
interface ChannelIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  }
}

const ChannelIdPage = async ({
  params
}: ChannelIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    }
  })

  const member = await db.member.findFirst({
    where: {
      profileId: profile.id,
      serverId: params.serverId
    }
  });

  if (!member || !channel) {
    redirect("/")
  }

  return (
    <div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
      <ChatHeader
        serverId={channel.serverId}
        name={channel.name}
        type="channel"
      />
      <div className="flex-1">
        Future Mesagges
      </div>
      <ChatInput 
        name={channel.name}
        type= "channel"
        apiUrl="/api/socket/messages"
        query={{
          serverId: channel.serverId,
          channelId: channel.id,
        }}
      />
    </div>
  )
}

export default ChannelIdPage
