package com.testv1; // replace your-apps-package-name with your app’s package name

import android.app.job.JobInfo;
import android.app.job.JobScheduler;
import android.content.ComponentName;
import android.content.Context;
import android.os.PersistableBundle;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Promise;
import com.testv1.MyJobService;

public class CustomModule extends ReactContextBaseJavaModule {
    private static final int JOB_ID = 2011;
    private static ReactApplicationContext reactContext;
    CustomModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
    // add to Model
    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void customEvent(String name, Promise promise) {
        try {
            promise.resolve(name);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    @ReactMethod
    public void scheduleJob() {
        MyJobService.startJob(reactContext,15);
    }

    @ReactMethod
    public void cancelJob() {
        Context context = getReactApplicationContext();

        JobScheduler jobScheduler = (JobScheduler) context.getSystemService(Context.JOB_SCHEDULER_SERVICE);
        jobScheduler.cancel(JOB_ID);
    }

}