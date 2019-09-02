package com.hyxy.dao;

import com.hyxy.entity.Userxx;
import java.util.List;
import java.util.Map;

public interface UserxxMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Userxx record);

    Userxx selectByPrimaryKey(Integer id);

    List<Userxx> selectAll();

    int updateByPrimaryKey(Userxx record);

	List<Userxx> selectMatching(Map<String, String> map);
}