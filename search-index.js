var searchIndex = JSON.parse('{\
"libportal":{"doc":"","i":[[0,"desktop","libportal","",null,null],[3,"AccountProxy","libportal::desktop","",null,null],[3,"BackgroundProxy","","",null,null],[3,"CameraProxy","","",null,null],[3,"DeviceProxy","","",null,null],[3,"EmailProxy","","",null,null],[3,"FileChooserProxy","","",null,null],[3,"InhibitProxy","","",null,null],[3,"LocationProxy","","",null,null],[3,"MemoryMonitorProxy","","",null,null],[3,"NetworkMonitorProxy","","",null,null],[3,"NotificationProxy","","",null,null],[3,"OpenURIProxy","","",null,null],[3,"PrintProxy","","",null,null],[3,"RemoteDesktopProxy","","",null,null],[3,"ScreenCastProxy","","",null,null],[3,"ScreenshotProxy","","",null,null],[3,"SecretProxy","","",null,null],[3,"SettingsProxy","","",null,null],[3,"TrashProxy","","",null,null],[3,"WallpaperProxy","","",null,null],[11,"new","","Creates a new proxy with the default service & path.",0,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",0,[[["connection",3]],["result",6]]],[11,"get_user_information","","GetUserInformation method",0,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",0,[[],["result",6]]],[11,"introspect","","",0,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",1,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",1,[[["connection",3]],["result",6]]],[11,"request_background","","RequestBackground method",1,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",1,[[],["result",6]]],[11,"introspect","","",1,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",2,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",2,[[["connection",3]],["result",6]]],[11,"access_camera","","AccessCamera method",2,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"open_pipe_wire_remote","","OpenPipeWireRemote method",2,[[["hashmap",3],["value",4]],[["result",6],["rawfd",6]]]],[11,"is_camera_present","","IsCameraPresent property",2,[[],["result",6]]],[11,"version","","version property",2,[[],["result",6]]],[11,"introspect","","",2,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",3,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",3,[[["connection",3]],["result",6]]],[11,"access_device","","AccessDevice method",3,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",3,[[],["result",6]]],[11,"introspect","","",3,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",4,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",4,[[["connection",3]],["result",6]]],[11,"compose_email","","ComposeEmail method",4,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",4,[[],["result",6]]],[11,"introspect","","",4,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",5,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",5,[[["connection",3]],["result",6]]],[11,"open_file","","OpenFile method",5,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"save_file","","SaveFile method",5,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"save_files","","SaveFiles method",5,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",5,[[],["result",6]]],[11,"introspect","","",5,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",6,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",6,[[["connection",3]],["result",6]]],[11,"create_monitor","","CreateMonitor method",6,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"inhibit","","Inhibit method",6,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"query_end_response","","QueryEndResponse method",6,[[],["result",6]]],[11,"version","","version property",6,[[],["result",6]]],[11,"introspect","","",6,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",7,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",7,[[["connection",3]],["result",6]]],[11,"create_session","","CreateSession method",7,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"start","","Start method",7,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",7,[[],["result",6]]],[11,"introspect","","",7,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",8,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",8,[[["connection",3]],["result",6]]],[11,"version","","version property",8,[[],["result",6]]],[11,"introspect","","",8,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",9,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",9,[[["connection",3]],["result",6]]],[11,"can_reach","","CanReach method",9,[[],["result",6]]],[11,"get_available","","GetAvailable method",9,[[],["result",6]]],[11,"get_connectivity","","GetConnectivity method",9,[[],["result",6]]],[11,"get_metered","","GetMetered method",9,[[],["result",6]]],[11,"get_status","","GetStatus method",9,[[],[["result",6],["hashmap",3]]]],[11,"version","","version property",9,[[],["result",6]]],[11,"introspect","","",9,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",10,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",10,[[["connection",3]],["result",6]]],[11,"add_notification","","AddNotification method",10,[[["hashmap",3],["value",4]],["result",6]]],[11,"remove_notification","","RemoveNotification method",10,[[],["result",6]]],[11,"version","","version property",10,[[],["result",6]]],[11,"introspect","","",10,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",11,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",11,[[["connection",3]],["result",6]]],[11,"open_directory","","OpenDirectory method",11,[[["hashmap",3],["value",4],["rawfd",6]],[["result",6],["string",3]]]],[11,"open_file","","OpenFile method",11,[[["hashmap",3],["value",4],["rawfd",6]],[["result",6],["string",3]]]],[11,"open_uri","","OpenURI method",11,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",11,[[],["result",6]]],[11,"introspect","","",11,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",12,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",12,[[["connection",3]],["result",6]]],[11,"prepare_print","","PreparePrint method",12,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"print","","Print method",12,[[["hashmap",3],["value",4],["rawfd",6]],[["result",6],["string",3]]]],[11,"version","","version property",12,[[],["result",6]]],[11,"introspect","","",12,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",13,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",13,[[["connection",3]],["result",6]]],[11,"create_session","","CreateSession method",13,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"notify_keyboard_keycode","","NotifyKeyboardKeycode method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_keyboard_keysym","","NotifyKeyboardKeysym method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_pointer_axis","","NotifyPointerAxis method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_pointer_axis_discrete","","NotifyPointerAxisDiscrete method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_pointer_button","","NotifyPointerButton method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_pointer_motion","","NotifyPointerMotion method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_pointer_motion_absolute","","NotifyPointerMotionAbsolute method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_touch_down","","NotifyTouchDown method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_touch_motion","","NotifyTouchMotion method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"notify_touch_up","","NotifyTouchUp method",13,[[["hashmap",3],["value",4]],["result",6]]],[11,"select_devices","","SelectDevices method",13,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"start","","Start method",13,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"available_device_types","","AvailableDeviceTypes property",13,[[],["result",6]]],[11,"version","","version property",13,[[],["result",6]]],[11,"introspect","","",13,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",14,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",14,[[["connection",3]],["result",6]]],[11,"create_session","","CreateSession method",14,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"open_pipe_wire_remote","","OpenPipeWireRemote method",14,[[["hashmap",3],["value",4]],[["result",6],["rawfd",6]]]],[11,"select_sources","","SelectSources method",14,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"start","","Start method",14,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"available_cursor_modes","","AvailableCursorModes property",14,[[],["result",6]]],[11,"available_source_types","","AvailableSourceTypes property",14,[[],["result",6]]],[11,"version","","version property",14,[[],["result",6]]],[11,"introspect","","",14,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",15,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",15,[[["connection",3]],["result",6]]],[11,"pick_color","","PickColor method",15,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"screenshot","","Screenshot method",15,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",15,[[],["result",6]]],[11,"introspect","","",15,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",16,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",16,[[["connection",3]],["result",6]]],[11,"retrieve_secret","","RetrieveSecret method",16,[[["hashmap",3],["value",4],["rawfd",6]],[["result",6],["string",3]]]],[11,"version","","version property",16,[[],["result",6]]],[11,"introspect","","",16,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",17,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",17,[[["connection",3]],["result",6]]],[11,"read","","Read method",17,[[],[["ownedvalue",3],["result",6]]]],[11,"read_all","","ReadAll method",17,[[],[["result",6],["hashmap",3]]]],[11,"version","","version property",17,[[],["result",6]]],[11,"introspect","","",17,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",18,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",18,[[["connection",3]],["result",6]]],[11,"trash_file","","TrashFile method",18,[[["rawfd",6]],["result",6]]],[11,"version","","version property",18,[[],["result",6]]],[11,"introspect","","",18,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",19,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",19,[[["connection",3]],["result",6]]],[11,"set_wallpaper_file","","SetWallpaperFile method",19,[[["hashmap",3],["value",4],["rawfd",6]],[["result",6],["string",3]]]],[11,"set_wallpaper_uri","","SetWallpaperURI method",19,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"version","","version property",19,[[],["result",6]]],[11,"introspect","","",19,[[],[["result",6],["string",3]]]],[0,"documents","libportal","",null,null],[3,"DocumentsProxy","libportal::documents","",null,null],[3,"FileTransferProxy","","",null,null],[11,"new","","Creates a new proxy with the default service & path.",20,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",20,[[["connection",3]],["result",6]]],[11,"add","","Add method",20,[[["rawfd",6]],[["result",6],["string",3]]]],[11,"add_full","","AddFull method",20,[[],["result",6]]],[11,"add_named","","AddNamed method",20,[[["rawfd",6]],[["result",6],["string",3]]]],[11,"add_named_full","","AddNamedFull method",20,[[["rawfd",6]],["result",6]]],[11,"delete","","Delete method",20,[[],["result",6]]],[11,"get_mount_point","","GetMountPoint method",20,[[],[["vec",3],["result",6]]]],[11,"grant_permissions","","GrantPermissions method",20,[[],["result",6]]],[11,"info","","Info method",20,[[],["result",6]]],[11,"list","","List method",20,[[],[["result",6],["hashmap",3]]]],[11,"lookup","","Lookup method",20,[[],[["result",6],["string",3]]]],[11,"revoke_permissions","","RevokePermissions method",20,[[],["result",6]]],[11,"version","","version property",20,[[],["result",6]]],[11,"introspect","","",20,[[],[["result",6],["string",3]]]],[11,"new","","Creates a new proxy with the default service & path.",21,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",21,[[["connection",3]],["result",6]]],[11,"add_files","","AddFiles method",21,[[["hashmap",3],["value",4]],["result",6]]],[11,"retrieve_files","","RetrieveFiles method",21,[[["hashmap",3],["value",4]],[["vec",3],["result",6]]]],[11,"start_transfer","","StartTransfer method",21,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"stop_transfer","","StopTransfer method",21,[[],["result",6]]],[11,"version","","version property",21,[[],["result",6]]],[11,"introspect","","",21,[[],[["result",6],["string",3]]]],[0,"flatpak","libportal","",null,null],[3,"FlatpakProxy","libportal::flatpak","",null,null],[11,"new","","Creates a new proxy with the default service & path.",22,[[["connection",3]],["result",6]]],[11,"new_for","","Creates a new proxy for the given `destination` and `path`.",22,[[["connection",3]],["result",6]]],[11,"create_update_monitor","","CreateUpdateMonitor method",22,[[["hashmap",3],["value",4]],[["result",6],["string",3]]]],[11,"spawn","","Spawn method",22,[[["hashmap",3],["hashmap",3],["value",4],["hashmap",3],["rawfd",6]],["result",6]]],[11,"spawn_signal","","SpawnSignal method",22,[[],["result",6]]],[11,"supports","","supports property",22,[[],["result",6]]],[11,"version","","version property",22,[[],["result",6]]],[11,"introspect","","",22,[[],[["result",6],["string",3]]]],[11,"from","libportal::desktop","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","libportal::documents","",20,[[]]],[11,"into","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from","libportal::flatpak","",22,[[]]],[11,"into","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]]],"p":[[3,"AccountProxy"],[3,"BackgroundProxy"],[3,"CameraProxy"],[3,"DeviceProxy"],[3,"EmailProxy"],[3,"FileChooserProxy"],[3,"InhibitProxy"],[3,"LocationProxy"],[3,"MemoryMonitorProxy"],[3,"NetworkMonitorProxy"],[3,"NotificationProxy"],[3,"OpenURIProxy"],[3,"PrintProxy"],[3,"RemoteDesktopProxy"],[3,"ScreenCastProxy"],[3,"ScreenshotProxy"],[3,"SecretProxy"],[3,"SettingsProxy"],[3,"TrashProxy"],[3,"WallpaperProxy"],[3,"DocumentsProxy"],[3,"FileTransferProxy"],[3,"FlatpakProxy"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);