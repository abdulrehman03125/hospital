import { Typography } from 'antd';
import { SeparatorVertical } from 'lucide-react';

const { Title, Text } = Typography;

const MeetOurTeam = () => {
  return (
    <div className="flex flex-col mt-12 md:flex-row justify-between items-start p-6 mx-auto max-w-5xl text-center md:text-left">
      {/* Left Section */}
      <div className="flex flex-col space-y-2 w-full md:w-1/2">
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <SeparatorVertical className="w-10 h-10 bg-cyan-500" />
          <Title level={3} className="text-cyan-500">Meet</Title>
          <Title level={3} className="text-gray-700">Our Team</Title>
        </div>
        <Text className="text-gray-500">Description text here...</Text>
      </div>

      {/* Right Section */}
      <div className="max-w-md w-full md:w-1/2 mt-4 md:mt-0">
        <Text strong className="text-black ">Oreo Hospital</Text>
        <Text className="text-gray-500"> The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure.</Text>
      </div>
    </div>
  );
};

export default MeetOurTeam;

