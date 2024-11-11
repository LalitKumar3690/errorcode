import React from 'react';

const Document = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto pt-28" >
      <h1 className="text-3xl font-bold mb-8">Documentation Home</h1>
      
      <Section title="Start Here">
        <Card title="What is Codex.code?" description="Learn about Codex.code and how it can help you manage your development environments." />
        <Card title="Getting Started" description="Get started with Codex.code and learn how to use and start your development with simple editor." />
      </Section>
      
      <Section title="Configure">
        <Card title="Select a Language " description="Create fast code with snipts of this code editor because this code editor snipts belongs to monaco editor." />
        <Card title="Manging code" description="Create and manage bulk of code ." />
        <Card title="Working " description="Defining custom devcontainer.json to standardize Workspace configuration." />
      </Section>
      
      <Section title="Use">
        <Card title="Create a Workspace" description="Create a development environment from a Git repository and start deploying." />
        <Card title="Configure your Account" description="Customize your Codeanywhere account settings and preferences." />
      </Section>
      
      <Section title="helps">
        <Card title="Contacting" description="Manage your Codex.code future updation sharing our feedbacks." />
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow text-gray-800">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Document;