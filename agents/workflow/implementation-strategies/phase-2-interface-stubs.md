# Phase 2: Interface Expansion – New Interface Stubs

## Volume
```typescript
export interface ICoreVolumeApi {
  listVolumes(): Promise<any[]>;
  inspectVolume(id: string): Promise<any>;
  createVolume(options: any): Promise<any>;
  removeVolume(id: string): Promise<void>;
  pruneVolumes(): Promise<any>;
}
```

## Network
```typescript
export interface ICoreNetworkApi {
  listNetworks(): Promise<any[]>;
  inspectNetwork(id: string): Promise<any>;
  createNetwork(options: any): Promise<any>;
  removeNetwork(id: string): Promise<void>;
  connectNetwork(id: string, options: any): Promise<void>;
  disconnectNetwork(id: string, options: any): Promise<void>;
  pruneNetworks(): Promise<any>;
}
```

## Plugin
```typescript
export interface ICorePluginApi {
  listPlugins(): Promise<any[]>;
  inspectPlugin(id: string): Promise<any>;
  enablePlugin(id: string, options?: any): Promise<void>;
  disablePlugin(id: string, options?: any): Promise<void>;
  removePlugin(id: string): Promise<void>;
  installPlugin(options: any): Promise<any>;
}
```

## Service
```typescript
export interface ICoreServiceApi {
  listServices(): Promise<any[]>;
  inspectService(id: string): Promise<any>;
  createService(options: any): Promise<any>;
  updateService(id: string, options: any): Promise<any>;
  removeService(id: string): Promise<void>;
}
```

## Task
```typescript
export interface ICoreTaskApi {
  listTasks(): Promise<any[]>;
  inspectTask(id: string): Promise<any>;
  logsTask(id: string, options?: any): Promise<string>;
}
```

## Node
```typescript
export interface ICoreNodeApi {
  listNodes(): Promise<any[]>;
  inspectNode(id: string): Promise<any>;
  updateNode(id: string, options: any): Promise<any>;
  removeNode(id: string): Promise<void>;
}
```

## Secret
```typescript
export interface ICoreSecretApi {
  listSecrets(): Promise<any[]>;
  inspectSecret(id: string): Promise<any>;
  createSecret(options: any): Promise<any>;
  updateSecret(id: string, options: any): Promise<any>;
  removeSecret(id: string): Promise<void>;
}
```

## Config
```typescript
export interface ICoreConfigApi {
  listConfigs(): Promise<any[]>;
  inspectConfig(id: string): Promise<any>;
  createConfig(options: any): Promise<any>;
  updateConfig(id: string, options: any): Promise<any>;
  removeConfig(id: string): Promise<void>;
}
```

## Exec
```typescript
export interface ICoreExecApi {
  startExec(id: string, options?: any): Promise<any>;
  inspectExec(id: string): Promise<any>;
  resizeExec(id: string, options: any): Promise<any>;
}
```

---

*Status: Interface stubs created. Ready for implementation and documentation of methods in next step.*
