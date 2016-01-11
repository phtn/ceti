ServiceConfiguration.configurations.remove({ service: ['google', 'facebook', 'github'] });

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  { $set: { 
  	clientId: "803904907315-311j7k3be464hfis0fpk0bkuq4ct8n2k.apps.googleusercontent.com", 
  	secret: "yaKZYlPrMIaSvFCivX2EW9rI" 
  } }
);

// localhost
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  { $set: { 
    appId: "908527415921343", 
    secret: "b2b50cf7d959d3a2357ae2869f25464c" 
  } }
);

ServiceConfiguration.configurations.upsert(
  {service: 'github'},
  {$set: {
    clientId: 'fb854223aff35411dbfc',
    secret: '28d4e9c97a85281aab84bc06ded56cce0c3c5d17'
  }}
);