package com.hyxy.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

public class Upload {
	public List<Map<String, String>> uploadfile(HttpServletRequest request, MultipartFile[] files) {
	      //���������ϴ��ɹ���ͼƬ·������
		   List<Map<String, String>> list = new ArrayList<>();
	      
	      Map<String, String> map = new HashMap<>();
	      // ͼƬ���·��,���ϴ��ļ�������tomcat������·����
	      String savePath = request.getServletContext().getRealPath("/serverimg");
	      map.put("savePath", savePath);
	      System.out.println(savePath);
	//F:\eclipse\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\springmvc\serverimg

	      File file = new File(savePath);
	      // ���Ŀ¼������
	      if (!file.exists()) {
	         // ����Ŀ¼
	         file.mkdirs();
	      }

	      if (files != null && files.length > 0) {
	         for (int i = 0; i < files.length; i++) {
	            // �õ��ϴ����ļ�����
	            String imgname = files[i].getOriginalFilename();
	            if (imgname!=null && imgname!="") {
	               // �õ��ϴ��ļ�����չ��
	               String fileExtName = imgname.substring(imgname.lastIndexOf("."));
	               // ������ļ�������uuid
	               String filename = makeFileName(fileExtName);
	               // ͼƬ���·��
	               String filePath = savePath + "/" + filename;

	               // ����ͼƬ·���������ݿ����ֱ�ӿ�����ʾͼƬ��·��
	               //String basePath = "http://localhost:8080"+request.getContextPath()+"/serverimg/";
	               //String path = basePath + "/" + filename;
	               // ����ͼƬ·���������ݿ�����ϴ����ͼƬ���֣�·����Ҫǰ̨����д
	               String path = filename;

	               File saveDir = new File(filePath);
	               if (!saveDir.getParentFile().exists()) {
	                 saveDir.getParentFile().mkdirs();
	               }

	               // ת���ļ�
	               try {
	                 files[i].transferTo(saveDir);
	               } catch (Exception e) {
	                 // TODO Auto-generated catch block
	                 e.printStackTrace();
	               }
	               map.put("path", path);
	            }
	         }
	      }
	      list.add(map);
	      return list;
	   }

	   private String makeFileName(String fileExtName) {
	      // Ϊ��ֹ�ļ����ǵ���������ҪΪ�ϴ��ļ�����һ��Ψһ���ļ���
	      return UUID.randomUUID().toString().replace("-", "") + fileExtName;
	   }
}
 
