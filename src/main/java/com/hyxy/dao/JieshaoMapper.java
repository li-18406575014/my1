package com.hyxy.dao;

import com.hyxy.entity.Jieshao;
import java.util.List;
import java.util.Map;

public interface JieshaoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Jieshao record);

    Jieshao selectByPrimaryKey(Integer id);

    List<Jieshao> selectAll();

    int updateByPrimaryKey(Jieshao record);

	void addIncreased(Map<String, String> map);
}