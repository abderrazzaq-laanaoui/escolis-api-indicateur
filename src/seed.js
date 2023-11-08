const Service = require('./models/ServiceModel');
const Instance = require('./models/InstanceModel');

async function seedDatabase() {
  // Clear the database
  await Service.deleteMany({});
  await Instance.deleteMany({});

  // Create 5 services
  for (let i = 1; i <= 5; i++) {
    const service = new Service({
      name: `Service ${i}`,
      description: `This is service ${i}`,
      serviceSourceId: `service${i}`,
    });

    // Create 2 instances for each service
    for (let j = 1; j <= 2; j++) {
      const instance = new Instance({
        serviceResourceId: service.serviceSourceId,
        hostname: `hostname${j}`,
        port: 3000 + j,
      });

      await instance.save();

      // Add the instance to the service's instances array
      service.instances.push(instance);
    }

    await service.save();
  }

  console.log('Database seeding completed');
}

seedDatabase().catch(console.error);
