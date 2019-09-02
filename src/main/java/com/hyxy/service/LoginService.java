package com.hyxy.service;

import java.util.List;
import java.util.Map;

import com.hyxy.entity.Userxx;

public interface LoginService {

	List<Userxx> selectUserxx(Map<String, String> map);

}
