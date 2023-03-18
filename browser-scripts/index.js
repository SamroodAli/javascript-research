foo();

bar();

new Service();

// all the above will run but this is the problem,
//  polluting the global namespace
// each script can run in isolation with IIFEs but imports and exports won't be available
