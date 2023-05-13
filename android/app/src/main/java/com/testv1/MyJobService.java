package com.testv1; // replace your-apps-package-name with your app’s package name
import android.app.job.JobInfo;
import android.app.job.JobParameters;
import android.app.job.JobScheduler;
import android.app.job.JobService;
import android.content.ComponentName;
import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class MyJobService extends JobService {
    private static final int JOB_ID = 2011;

    private static final String TAG = "MyJobService";

    private JobParameters jobParameters;


    private static JobInfo getJob(Context context, int periodicTimeInMinutes){
        JobInfo.Builder builder = new JobInfo.Builder(JOB_ID, new ComponentName(context, MyJobService.class));
        if(periodicTimeInMinutes > 0) {
            builder.setPeriodic(periodicTimeInMinutes * 60000);
            builder.setPersisted(true);
        }else{
            builder.setOverrideDeadline(0);
        }
        builder.setRequiredNetworkType(JobInfo.NETWORK_TYPE_ANY);
        return builder.build();
    }

    public static void startJob(Context context, int minutes){

        if(context != null) {

            JobScheduler js = (JobScheduler) context.getSystemService(Context.JOB_SCHEDULER_SERVICE);

            if (js != null) {

                List<JobInfo> jobs = js.getAllPendingJobs();

                boolean active = false;

                for(JobInfo j : jobs){

                    if(j.getId() == MyJobService.JOB_ID){

                        active = true;

                        break;

                    }

                }

                if (!active) {

                    js.schedule(MyJobService.getJob(context, minutes));

                    Log.w(TAG, "Job Scheduled");

                }

            }

        }

    }
//     private static final String TAG = "MyJobService";
//     private static final int JOB_ID = 2011;

    @Override
    public boolean onStartJob(JobParameters params) {
        // Ejemplo de llamada a una API POST con body JSON
        
        new ApiPostTask().execute();

        // Indica si la tarea en segundo plano está en curso
        return true;
    }

    @Override
    public boolean onStopJob(JobParameters params) {
        return false;
    }

    private class ApiPostTask extends AsyncTask<Void, Void, Void> {
        @Override
        protected Void doInBackground(Void... voids) {
            try {
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
                String currentDate = dateFormat.format(new Date());
                // URL y cuerpo de la solicitud POST
                String apiUrl = "https://test--apiv2--hvyxp7fk8yms.code.run";
                String text = "app";
                String jsonBody = "{\"text\":\"" + text + "\",\"date\":\"" + currentDate + "\"}";
                // String jsonBody = "{\"text\":\"value\"}";

                // Establecer conexión HTTP
                URL url = new URL(apiUrl);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("POST");
                connection.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
                connection.setDoOutput(true);

                // Enviar el cuerpo de la solicitud POST
                try (OutputStream outputStream = connection.getOutputStream()) {
                    byte[] input = jsonBody.getBytes(StandardCharsets.UTF_8);
                    outputStream.write(input, 0, input.length);
                }

                // Obtener la respuesta de la API
                int responseCode = connection.getResponseCode();
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    // La solicitud fue exitosa
                    Log.d(TAG, "API POST request successful");
                } else {
                    // La solicitud falló
                    Log.d(TAG, "API POST request failed");
                }
            } catch (IOException e) {
//                e.printStackTrace();
                Log.e("error",e.getMessage());
            }

            return null;
        }
    }
}
