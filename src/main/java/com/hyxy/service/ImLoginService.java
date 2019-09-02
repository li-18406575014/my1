package com.hyxy.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.hyxy.dao.UserxxMapper;
import com.hyxy.entity.Userxx;

@Service
public class ImLoginService implements LoginService {

	@Resource
	private UserxxMapper userxxMapper;

	@Override
	public List<Userxx> selectUserxx(Map<String, String> map) {
		List<Userxx> list2 = userxxMapper.selectMatching(map);
		return list2;
	}
}
