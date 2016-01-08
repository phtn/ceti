ServiceConfiguration.configurations.remove({ service: ['google', 'facebook'] });

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