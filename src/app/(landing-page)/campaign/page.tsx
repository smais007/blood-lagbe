
import { PageHeader } from '@/components/pageHeader'

import { JoinUs } from './_components/joinUs';
import { AllCampaign } from './_components/allCampaign';
import { CampaignGoals } from './_components/campaignGoals';

 const Campaign = () => {
  return (
    <div className='bg-gray-50'>
        <PageHeader title='Campaign' subtitle='Here you are see all the campaign'></PageHeader>
        <AllCampaign></AllCampaign>
        <JoinUs></JoinUs>
        <CampaignGoals></CampaignGoals>
    </div>
  )
};

export default Campaign;
